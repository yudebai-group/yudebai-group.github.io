/* UI strings (EN default, 中文). Page content lives in data/content.js. */

const I18N = {
  en: {
    pageTitle: 'Yude Bai — Tiangong University',
    brand: 'Yude Bai',
    navAbout: 'About',
    navNews: 'News',
    navPubs: 'Publications',
    navProjects: 'Projects',
    navPatents: 'Patents & Software',
    navStudents: 'Students',
    scholarLabel: 'Google Scholar',

    heroName: 'Yude Bai 白裕德',
    heroRole: 'Lecturer · Master’s Supervisor',
    heroSchool: 'School of Software, Tiangong University · 天津工业大学软件学院',
    heroOffice: 'Office: Room C507, School of Software',

    aboutTitle: 'About',
    aboutBody: [
      'I am a Lecturer and Master’s supervisor at the School of Software, Tiangong University. I received my Ph.D. in Software Engineering from Tianjin University in 2023.',
      'My research focuses on endpoint security, large language model & agent security, and data intelligence analysis — including malware detection, behavior analysis, and recommendation. I have published 47 CCF-listed conference/journal papers, 12 of which are CCF A, and hold 15 authorized or filed patents.',
      'I serve as a member of CCF YOCSEF Tianjin and the CCF Technical Committee on Computer Security, and as a program committee member / reviewer for venues including ICLR, AAAI, IJCAI, DASFAA, TDSC, TOSEM and SCIS.',
    ],
    interestsTitle: 'Research Interests',
    interests: ['Endpoint Security & Malware Detection', 'LLM & Agent Security', 'Data Intelligence: Behavior Analysis & Recommendation'],

    newsTitle: '🔥 News',

    pubsTitle: '📝 Publications',
    groupFc: 'First / Corresponding Author',
    groupSp: 'Supervised / Collaborative Work',
    countUnit: n => n + ' papers',
    filterAll: 'All',
    filters: { a: 'CCF A', b: 'CCF B', sci: 'SCI 1/2区', t2: '中文 T1/T2' },
    roles: { first: 'First Author', corr: 'Corresponding', co: 'Co-author', oral: 'Oral', poster: 'Poster' },
    btnPdf: '📄 PDF',
    btnPdfExt: 'PDF ↗',
    btnPdfExtTip: 'Local PDF not available yet — opens the publisher page. Drop pdf/<id>.pdf into the repository to enable in-page preview.',
    btnPending: 'PDF pending',
    btnPendingTip: 'Download the PDF and place it in /pdf to enable preview.',

    projectsTitle: '🔬 Research Projects',
    projPi: 'As Principal Investigator',
    projJoined: 'As Participant',
    projUnit: n => n + ' projects',

    patentsTitle: '📜 Patents & Software',
    patentTypes: { authorized: 'Authorized Patent', filed: 'Filed Patent', copyright: 'Software Copyright' },
    patentUnit: n => n + ' items',

    studentsTitle: '🎓 Students',
    gradeLabel: y => 'Enrolled ' + y,
    studentUnit: n => n + (n > 1 ? ' students' : ' student'),
    studentMeta: (y, school) => '(' + y + '-now, ' + school + ')',

    footer: '© 2026 Yude Bai · School of Software, Tiangong University · Hosted on GitHub Pages',
    updated: 'Last updated',
  },

  zh: {
    pageTitle: '白裕德 — 天津工业大学',
    brand: '白裕德',
    navAbout: '简介',
    navNews: '动态',
    navPubs: '论文',
    navProjects: '科研项目',
    navPatents: '专利软著',
    navStudents: '学生',
    scholarLabel: '谷歌学术',

    heroName: '白裕德 Yude Bai',
    heroRole: '讲师 · 硕士生导师',
    heroSchool: '天津工业大学软件学院',
    heroOffice: '办公地点：软件学院 C507',

    aboutTitle: '简介',
    aboutBody: [
      '白裕德，天津工业大学软件学院讲师、硕导，2023 年毕业于天津大学智能与计算学部，获工学博士学位。',
      '主要研究方向为终端安全、大模型安全与数据智能分析，包括恶意软件检测、智能体安全、行为分析和推荐等。发表 CCF 会议/期刊论文 47 篇，其中 CCF A 类 12 篇；授权或受理专利 15 项。',
      '担任 CCF YOCSEF 天津委员、CCF 计算机安全专业委员会委员，以及 ICLR、AAAI、IJCAI、DASFAA、TDSC、TOSEM、SCIS 等国际会议与期刊的程序委员会成员/审稿人。',
    ],
    interestsTitle: '研究方向',
    interests: ['终端安全与恶意软件检测', '大模型与智能体安全', '数据智能分析：行为分析、推荐'],

    newsTitle: '🔥 新闻动态',

    pubsTitle: '📝 代表性论文',
    groupFc: '一作 / 通讯作者',
    groupSp: '指导 / 参与工作',
    countUnit: n => n + ' 篇',
    filterAll: '全部',
    filters: { a: 'CCF A', b: 'CCF B', sci: 'SCI 1/2 区', t2: '中文 T1/T2' },
    roles: { first: '一作', corr: '通讯', co: '参与', oral: 'Oral', poster: 'Poster' },
    btnPdf: '📄 PDF',
    btnPdfExt: 'PDF ↗',
    btnPdfExtTip: '暂未收录本地 PDF，点击打开出版方页面。将文件放入 pdf/<id>.pdf 后即可页内预览。',
    btnPending: 'PDF 待补充',
    btnPendingTip: '下载 PDF 放入 /pdf 目录后即可预览。',

    projectsTitle: '🔬 科研项目',
    projPi: '主持',
    projJoined: '参与',
    projUnit: n => n + ' 项',

    patentsTitle: '📜 专利与软著',
    patentTypes: { authorized: '授权专利', filed: '受理专利', copyright: '软件著作权' },
    patentUnit: n => n + ' 项',

    studentsTitle: '🎓 学生',
    gradeLabel: y => y + ' 级',
    studentUnit: n => n + ' 人',
    studentMeta: (y, school) => '（' + y + '-至今，' + school + '）',

    footer: '© 2026 白裕德 · 天津工业大学软件学院 · 由 GitHub Pages 托管',
    updated: '最近更新',
  },
};
