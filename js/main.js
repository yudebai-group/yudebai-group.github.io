/* Site logic: i18n rendering, publication filters, PDF viewer modal. */
(function () {
  'use strict';

  const SELF = ['Yude Bai', '白裕德'];
  const params = new URLSearchParams(location.search);
  let lang = params.get('lang') || localStorage.getItem('bai-lang') || 'en';
  if (lang !== 'en' && lang !== 'zh') lang = 'en';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const loc = v => (typeof v === 'string' ? v : (v[lang] || v.en || v.zh || ''));

  let activeFilter = 'all';

  /* ---------- language ---------- */

  function applyStatic() {
    const t = I18N[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = t.pageTitle;
    $$('[data-i18n]').forEach(el => {
      const v = t[el.dataset.i18n];
      if (typeof v === 'string') el.textContent = v;
    });
    $('#langToggle').textContent = lang === 'en' ? '中文' : 'EN';
    const sl = $('#scholarLink');
    if (sl) sl.href = 'https://scholar.google.com/citations?user=FvdC8R8AAAAJ&hl=' + (lang === 'zh' ? 'zh-CN' : 'en');
    const meta = $('#metaDesc');
    if (meta) meta.setAttribute('content', t.pageTitle);
  }

  function renderAbout() {
    const t = I18N[lang];
    $('#aboutBody').innerHTML = t.aboutBody.map(p => '<p>' + esc(p) + '</p>').join('');
    $('#interestChips').innerHTML = t.interests.map(i => '<span class="chip">' + esc(i) + '</span>').join('');
  }

  function renderNews() {
    $('#newsList').innerHTML = NEWS.map(n =>
      '<li><span class="date">' + esc(n.d) + '</span><span class="news-text">' + (n[lang] || n.en) + '</span></li>'
    ).join('');
  }

  /* ---------- publications ---------- */

  function rankClass(rank) {
    if (rank === 'CCF A') return 'rank-a';
    if (rank === 'CCF B') return 'rank-b';
    if (rank.indexOf('SCI') === 0) return 'rank-sci';
    return 'rank-t2';
  }

  function matchesFilter(p) {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'a') return p.ranks.includes('CCF A');
    if (activeFilter === 'b') return p.ranks.includes('CCF B');
    if (activeFilter === 'sci') return p.ranks.some(r => r.startsWith('SCI'));
    if (activeFilter === 't2') return p.ranks.some(r => r.indexOf('中文') === 0);
    return true;
  }

  function renderAuthors(p) {
    return p.authors.map(a => {
      let name = a, sup = '';
      if (name.endsWith('*')) { name = name.slice(0, -1); sup = '<sup>*</sup>'; }
      if (name.endsWith('#')) { name = name.slice(0, -1); sup = '<sup>#</sup>' + sup; }
      const isSelf = SELF.includes(name) || name === p.self;
      return isSelf ? '<b class="self">' + esc(name) + '</b>' + sup : esc(name) + sup;
    }).join(', ');
  }

  function renderPubItem(p) {
    const t = I18N[lang];
    const localPdf = p._pdf || p.pdf || null;
    const badges =
      p.ranks.map(r => '<span class="badge ' + rankClass(r) + '">' + esc(r) + '</span>').join('') +
      p.roles.map(r => '<span class="badge role-' + r + '">' + esc(t.roles[r] || r) + '</span>').join('');

    let action;
    if (localPdf) {
      action = '<a class="btn btn-pdf" href="' + esc(localPdf) + '" data-id="' + p.id + '">' + esc(t.btnPdf) + '</a>';
    } else if (p.url) {
      action = '<a class="btn btn-ext" href="' + esc(p.url) + '" target="_blank" rel="noopener" title="' + esc(t.btnPdfExtTip) + '">' + esc(t.btnPdfExt) + '</a>';
    } else {
      action = '<span class="btn btn-off" title="' + esc(t.btnPendingTip) + '">' + esc(t.btnPending) + '</span>';
    }
    const extra = (localPdf && p.url)
      ? '<a class="btn btn-ext" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.urlLabel || 'DOI') + ' ↗</a>'
      : '';

    const titleHtml = localPdf
      ? '<a href="' + esc(localPdf) + '" data-id="' + p.id + '">' + esc(loc(p.title)) + '</a>'
      : (p.url
        ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(loc(p.title)) + '</a>'
        : esc(loc(p.title)));

    return '' +
      '<article class="pub">' +
        '<div class="pub-year">' + p.year + '</div>' +
        '<div class="pub-main">' +
          '<div class="pub-badges">' + badges + '</div>' +
          '<h3 class="pub-title">' + titleHtml + '</h3>' +
          '<p class="pub-authors">' + renderAuthors(p) + '</p>' +
          '<p class="pub-venue">' + esc(loc(p.venue)) + '</p>' +
          '<div class="pub-links">' + action + extra + '</div>' +
        '</div>' +
      '</article>';
  }

  function renderFilters() {
    const t = I18N[lang];
    const count = f => PAPERS.filter(p => {
      if (f === 'all') return true;
      if (f === 'a') return p.ranks.includes('CCF A');
      if (f === 'b') return p.ranks.includes('CCF B');
      if (f === 'sci') return p.ranks.some(r => r.startsWith('SCI'));
      return p.ranks.some(r => r.indexOf('中文') === 0);
    }).length;
    const defs = [['all', t.filterAll], ['a', t.filters.a], ['b', t.filters.b], ['sci', t.filters.sci], ['t2', t.filters.t2]];
    $('#filters').innerHTML = defs.map(([f, label]) =>
      '<button type="button" class="filter-btn' + (activeFilter === f ? ' active' : '') + '" data-filter="' + f + '">' +
      esc(label) + '<span class="cnt">' + count(f) + '</span></button>'
    ).join('');
  }

  function renderPubs() {
    const t = I18N[lang];
    renderFilters();
    const byYear = (a, b) => b.year - a.year;
    const fc = PAPERS.filter(p => p.group === 'fc' && matchesFilter(p)).sort(byYear);
    const sp = PAPERS.filter(p => p.group === 'sp' && matchesFilter(p)).sort(byYear);
    let html = '';
    if (fc.length) html += '<h3 class="group-title">' + esc(t.groupFc) + '<span class="count">' + t.countUnit(fc.length) + '</span></h3>' + fc.map(renderPubItem).join('');
    if (sp.length) html += '<h3 class="group-title">' + esc(t.groupSp) + '<span class="count">' + t.countUnit(sp.length) + '</span></h3>' + sp.map(renderPubItem).join('');
    if (!fc.length && !sp.length) html = '<p class="empty">—</p>';
    $('#pubGroups').innerHTML = html;
  }

  /* ---------- projects / patents ---------- */

  function renderProjects() {
    const t = I18N[lang];
    const item = p =>
      '<li class="proj"><div class="proj-name">' + esc(loc(p)) + '</div><div class="proj-meta"><span class="meta-chip">' + esc(loc(p.meta)) + '</span></div></li>';
    $('#projectList').innerHTML =
      '<h3 class="group-title">' + esc(t.projPi) + '<span class="count">' + t.projUnit(PROJECTS.pi.length) + '</span></h3>' +
      '<ul class="proj-list">' + PROJECTS.pi.map(item).join('') + '</ul>' +
      '<h3 class="group-title">' + esc(t.projJoined) + '<span class="count">' + t.projUnit(PROJECTS.joined.length) + '</span></h3>' +
      '<ul class="proj-list">' + PROJECTS.joined.map(item).join('') + '</ul>';
  }

  function renderPatents() {
    const t = I18N[lang];
    const order = ['authorized', 'filed', 'copyright'];
    $('#patentList').innerHTML = order.map(type => {
      const items = PATENTS.filter(p => p.type === type);
      if (!items.length) return '';
      return '<h3 class="group-title">' + esc(t.patentTypes[type]) + '<span class="count">' + t.patentUnit(items.length) + '</span></h3>' +
        '<ul class="patent-list">' + items.map(p =>
          '<li class="patent"><span class="p-year">' + esc(p.y) + '</span><span class="p-name">' + esc(p[lang] || p.en) + '</span></li>'
        ).join('') + '</ul>';
    }).join('');
  }

  function renderStudents() {
    const t = I18N[lang];
    $('#studentsList').innerHTML = STUDENTS.map(g =>
      '<h3 class="group-title">' + esc(t.gradeLabel(g.year)) + '<span class="count">' + t.studentUnit(g.members.length) + '</span></h3>' +
      '<ul class="student-list">' + g.members.map(m =>
        '<li class="student"><span class="s-name">' + esc(m[lang] || m.en) + '</span>' +
        '<span class="s-meta">' + esc(t.studentMeta(g.year, loc(m.school))) + '</span></li>'
      ).join('') + '</ul>'
    ).join('');
  }

  /* ---------- PDF modal ---------- */

  function openPdf(id) {
    const p = PAPERS.find(x => x.id === id);
    if (!p) return;
    const src = p._pdf || p.pdf;
    if (src) {
      const dlg = $('#pdfDialog');
      $('#pdfFrame').src = src;
      $('#pdfTitle').textContent = loc(p.title);
      const ext = $('#pdfExt');
      if (p.url) { ext.href = p.url; ext.style.display = 'inline-flex'; } else { ext.style.display = 'none'; }
      dlg.showModal();
    } else if (p.url) {
      window.open(p.url, '_blank', 'noopener');
    }
  }

  function bindPdfDialog() {
    $('#pubGroups').addEventListener('click', e => {
      const a = e.target.closest('a[data-id]');
      if (!a) return;
      const p = PAPERS.find(x => x.id === a.dataset.id);
      if (!p) return;
      if (p._pdf || p.pdf) { e.preventDefault(); openPdf(p.id); }
    });
    $('#filters').addEventListener('click', e => {
      const b = e.target.closest('.filter-btn');
      if (!b) return;
      activeFilter = b.dataset.filter;
      renderPubs();
    });
    const dlg = $('#pdfDialog');
    $('#pdfClose').addEventListener('click', () => dlg.close());
    dlg.addEventListener('close', () => { $('#pdfFrame').src = 'about:blank'; });
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    $('#langToggle').addEventListener('click', () => {
      lang = lang === 'en' ? 'zh' : 'en';
      localStorage.setItem('bai-lang', lang);
      renderAll();
    });
  }

  /* ---------- boot ---------- */

  function renderAll() {
    applyStatic();
    renderAbout();
    renderNews();
    renderPubs();
    renderProjects();
    renderPatents();
    renderStudents();
  }

  function detectLocalPdfs() {
    return Promise.all(PAPERS.map(p =>
      fetch('pdf/' + p.id + '.pdf', { method: 'HEAD' })
        .then(r => { if (r.ok) p._pdf = 'pdf/' + p.id + '.pdf'; })
        .catch(() => {})
    ));
  }

  bindPdfDialog();
  renderAll();
  detectLocalPdfs().then(() => renderPubs());
})();
