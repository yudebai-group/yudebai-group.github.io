/* ===========================================================================
   Site content — edit this file to maintain the homepage.
   ---------------------------------------------------------------------------
   Papers shown are restricted to: CCF A / CCF B, SCI Q1/Q2, CCF Chinese T1/T2.
   Roles: first = first author, corr = corresponding author, co = co-author,
          oral / poster = presentation type.
   Local PDFs live in /pdf. A file named  pdf/<id>.pdf  is detected
   automatically; otherwise set  pdf: "pdf/<filename>.pdf"  on the entry.
   =========================================================================== */

const PAPERS = [

  /* ---------------------------- First / Corresponding --------------------- */
  {
    id: 'mars', group: 'fc', year: 2026,
    venue: 'ICSE-JAWs 2026',
    ranks: ['CCF A'], roles: ['corr'],
    title: 'MARS: Few-Shot Android Malware Detection with RAG-Enhanced LLMs',
    authors: ['Guangquan Xu', 'Minhong Dong', 'Qi Guo', 'Hongpeng Bai', 'Yao Zhang', 'Ruitao Feng', 'Wenying He', 'Yude Bai*', 'Ji Zhang*'],
    url: 'https://conf.researchr.org/details/icse-2026/jaws-2026-papers/39/MARS-Few-Shot-Android-Malware-Detection-with-RAG-Enhanced-LLMs',
    urlLabel: 'ICSE 2026',
  },
  {
    id: 'dualdis', group: 'fc', year: 2026,
    venue: 'WWW 2026 (Oral)',
    ranks: ['CCF A'], roles: ['corr', 'oral'],
    title: 'DualDis: A Dual Disentanglement Network for Vehicle Re-identification',
    authors: ['Wenying He', 'Feiyu Wang', 'Guangquan Xu', 'Yude Bai*', 'Fei Guo*'],
    url: 'https://doi.org/10.1145/3774904.3792564',
  },
  {
    id: 'filling-missings', group: 'fc', year: 2025,
    venue: 'IJCAI 2025',
    ranks: ['CCF B'], roles: ['corr'],
    title: 'Filling the Missings: Spatiotemporal Data Imputation by Conditional Diffusion',
    authors: ['Wenying He', 'Jieling Huang', 'Junhua Gu*', 'Ji Zhang', 'Yude Bai*'],
    pdf: 'pdf/filling-missings.pdf',
    url: 'https://doi.org/10.24963/ijcai.2025/320',
  },
  {
    id: 'leodroid', group: 'fc', year: 2025,
    venue: 'IEEE S&P 2025 (HMISA Workshop)',
    ranks: ['CCF A'], roles: ['corr'],
    title: 'LeoDroid: An LLM-based Few-Shot Multi-Label Detection for Android Malware',
    authors: ['Minhong Dong', 'Liyuan Liu', 'Qi Guo', 'Hongpeng Bai', 'Ruijie Gong', 'Yude Bai*', 'Wenying He', 'Ji Zhang', 'Ze Wang', 'Guangquan Xu*'],
    url: 'https://doi.org/10.1109/SPW.2025.00042',
  },
  {
    id: 'argusdroid', group: 'fc', year: 2023,
    venue: 'Science China Information Sciences (SCIS)',
    ranks: ['CCF A'], roles: ['first'],
    title: 'ArgusDroid: Detecting Android Malware Variants by Mining Permission-API Knowledge Graph',
    authors: ['Yude Bai', 'Sen Chen*', 'Zhenchang Xing', 'Xiaohong Li*'],
    pdf: 'pdf/argusdroid.pdf',
    url: 'https://doi.org/10.1007/s11432-021-3414-7',
  },
  {
    id: 'siamese', group: 'fc', year: 2020,
    venue: 'ICSE 2020',
    ranks: ['CCF A'], roles: ['first'],
    title: 'Unsuccessful Story about Few Shot Malware Family Classification and Siamese Network to the Rescue',
    authors: ['Yude Bai', 'Zhenchang Xing', 'Xiaohong Li*', 'Zhiyong Feng', 'Duoyuan Ma'],
    url: 'https://doi.org/10.1145/3377811.3380354',
  },
  {
    id: 'androtruth', group: 'fc', year: 2026,
    venue: 'RAID 2026',
    ranks: ['CCF B'], roles: ['corr'],
    title: 'AndroTruth: A Reliable Benchmark Android Malware Dataset Derived from Technical Expert Reports',
    authors: ['Hongpeng Bai', 'Yao Zhang', 'Minhong Dong', 'Shunzhe Zhao', 'Haobo Zhang', 'Lingyue Li', 'Yude Bai*', 'Shuai Hu', 'Guangquan Xu*'],
    pdf: 'pdf/androtruth.pdf',
    url: 'https://arxiv.org/abs/2510.16835',
    urlLabel: 'arXiv',
  },
  {
    id: 'traj-privacy', group: 'fc', year: 2026,
    venue: 'IEEE Internet of Things Journal',
    ranks: ['SCI 1区'], roles: ['first'],
    title: 'Rethinking the Reliability of Trajectory Privacy through Group Based Semantic Transition',
    authors: ['Yude Bai', 'Zitian Liu', 'Lyuchuan Wei', 'Minhong Dong', 'Guangquan Xu', 'Xiaoqiang Di', 'Pan Gao*', 'Wei Yu*', 'Wenying He*'],
    url: 'https://doi.org/10.1109/JIOT.2026.3741571',
  },
  {
    id: 'llm-audit-poster', group: 'fc', year: 2026,
    venue: 'RAID 2026 (Poster)',
    ranks: ['CCF B'], roles: ['corr', 'poster'],
    title: 'A Human-Guided LLM Audit for Security Documentation Failures',
    authors: ['Yude Bai', 'Ai Wang', 'Minhong Dong', 'Qi Guo', 'Weizhe Wang', 'Zhaoyu Qiu', 'Hongpeng Bai*', 'Wenying He*'],
  },
  {
    id: 'multiprompt', group: 'fc', year: 2026,
    venue: { en: 'Journal of Chinese Computer Systems', zh: '小型微型计算机系统' },
    ranks: ['中文 T2'], roles: ['first'],
    title: { en: 'Multi-Prompt Strategy-Driven Multi-Label Detection for Android Malware', zh: '多提示策略驱动的安卓恶意软件多标签检测' },
    authors: ['白裕德', '梁鑫淼', '董敏弘', '许光全', '胡帅', '余韦*', '王萌*', '何文颖*'],
    self: '白裕德',
  },
  {
    id: 'biolemons', group: 'fc', year: 2026,
    venue: 'DASFAA 2026',
    ranks: ['CCF B'], roles: ['corr'],
    title: 'BioLemons: Latent Conditional Diffusion Model with VAE Embedding for Enhancing Spatial Transcriptomics',
    authors: ['Haolu Zhou#', 'Wenying He#', 'Yude Bai*', 'Fei Guo*'],
    url: 'https://doi.org/10.1007/978-981-92-0369-7_3',
  },
  {
    id: 'mrna-ac4c', group: 'fc', year: 2025,
    venue: 'ECAI 2025',
    ranks: ['CCF B'], roles: ['corr'],
    title: "Catching mRNA's Hidden Marks: A Dual-Path Network by Contrastive Learning for N4-acetylcytidine Prediction",
    authors: ['Wenying He', 'Yu Han', 'Haolu Zhou', 'Yun Zuo', 'Yude Bai*', 'Fei Guo*'],
    url: 'https://doi.org/10.3233/FAIA251061',
  },
  {
    id: 'calmdroid', group: 'fc', year: 2025,
    venue: 'ICPC 2025',
    ranks: ['CCF B'], roles: ['corr'],
    title: 'CalmDroid: Core-Set Based Active Learning for Multi-Label Android Malware Detection',
    authors: ['Minhong Dong', 'Liyuan Liu', 'Mengting Zhang', 'Sen Chen', 'Wenying He', 'Ze Wang', 'Yude Bai*'],
    pdf: 'pdf/calmdroid.pdf',
    url: 'https://doi.org/10.1109/ICPC66645.2025.00013',
  },
  {
    id: 'emotional-polarity', group: 'fc', year: 2024,
    venue: 'DASFAA 2024',
    ranks: ['CCF B'], roles: ['corr'],
    title: 'Emotional Polarity Attention Mechanism for Text Sentiment Analysis',
    authors: ['Junwei Zhang', 'Tianheng Wang', 'Chenyang Wang*', 'Yude Bai*', 'Yupeng Zhang', 'Yantao Li'],
    pdf: 'pdf/emotional-polarity.pdf',
    url: 'https://doi.org/10.1007/978-981-97-5569-1_1',
  },
  {
    id: 'comnet', group: 'fc', year: 2021,
    venue: 'Computer Networks',
    ranks: ['CCF B'], roles: ['first'],
    title: 'Comparative Analysis of Feature Representations and Machine Learning Methods in Android Family Classification',
    authors: ['Yude Bai', 'Zhenchang Xing', 'Duoyuan Ma', 'Xiaohong Li*', 'Zhiyong Feng'],
    url: 'https://doi.org/10.1016/j.comnet.2020.107639',
  },

  /* ---------------------------- Supervised / Collaborative --------------- */
  {
    id: 'limr', group: 'sp', year: 2026,
    venue: 'IEEE Transactions on Services Computing (TSC)',
    ranks: ['CCF A'], roles: ['co'],
    title: 'LIMR: Intent-Aware Mashup API Recommendation via LLM-Augmented Multi-Scale Fusion',
    authors: ['Yao Zhang', 'Yude Bai', 'Minhong Dong', 'Keqing Cen', 'Ji Zhang', 'Qiang Hu*', 'Wei Ma', 'Yongqiang Lyu', 'Ruitao Feng', 'Xiaohong Li*', 'Junjie Wang', 'Lingxiao Jiang', 'Yang Liu'],
    url: 'https://ieeexplore.ieee.org/document/11435625',
    urlLabel: 'IEEE Xplore',
  },
  {
    id: 'knowledge-is-power', group: 'sp', year: 2026,
    venue: 'IEEE Transactions on Mobile Computing (TMC)',
    ranks: ['CCF A'], roles: ['co'],
    title: 'Knowledge is Power: A Knowledge Graph-Based Approach for Mobile Malware Traceability Analysis',
    authors: ['Yao Zhang', 'Guangquan Xu', 'Ruitao Feng', 'Xiaohong Li*', 'Sen Chen*', 'Zhenchang Xing', 'Yude Bai', 'Yongqiang Lyu', 'Wei Gong', 'Xibin Zhao'],
    pdf: 'pdf/knowledge-is-power.pdf',
    url: 'https://doi.org/10.1109/TMC.2026.3673942',
  },
  {
    id: 'rubato', group: 'sp', year: 2026,
    venue: 'IEEE Transactions on Dependable and Secure Computing (TDSC)',
    ranks: ['CCF A'], roles: ['co'],
    title: 'Rubato: Efficient Post-Quantum Asynchronous Distributed Randomness Beacon with Integrated Consensus',
    authors: ['Linghe Yang', 'Tonghong Chong', 'Jian Liu', 'Jingyi Cui', 'Guangquan Xu*', 'Yude Bai', 'Lei Zhang', 'Tao Luo'],
    pdf: 'pdf/rubato.pdf',
    url: 'https://doi.org/10.1109/TDSC.2026.3670775',
  },
  {
    id: 'cross-domain-user', group: 'sp', year: 2026,
    venue: 'AAAI 2026',
    ranks: ['CCF A'], roles: ['co'],
    title: 'Hierarchical Attention Network with Correction for Cross-Domain User Association',
    authors: ['Wenlong Liu', 'Ze Wang*', 'Chenlong Wu', 'Yude Bai', 'Ji Zhang'],
    pdf: 'pdf/cross-domain-user.pdf',
    url: 'https://doi.org/10.1609/aaai.v40i18.38561',
  },
  {
    id: 'cross-domain-trajectory', group: 'sp', year: 2025,
    venue: 'AAAI 2025 (Oral)',
    ranks: ['CCF A'], roles: ['co', 'oral'],
    title: 'Cross-Domain Trajectory Association Based on Hierarchical Spatiotemporal Enhanced Attention Hypergraph',
    authors: ['Chenlong Wu', 'Ze Wang*', 'Keqing Cen', 'Yude Bai', 'Jin Hao'],
    pdf: 'pdf/cross-domain-trajectory.pdf',
    url: 'https://doi.org/10.1609/aaai.v39i12.33402',
  },
  {
    id: 'tosem-key-aspects', group: 'sp', year: 2021,
    venue: 'ACM Transactions on Software Engineering and Methodology (TOSEM)',
    ranks: ['CCF A'], roles: ['co'],
    title: 'Detecting and Augmenting Missing Key Aspects in Vulnerability Descriptions',
    authors: ['Hao Guo', 'Sen Chen*', 'Zhenchang Xing', 'Xiaohong Li*', 'Yude Bai', 'Jiamou Sun'],
    pdf: 'pdf/tosem-key-aspects.pdf',
    url: 'https://doi.org/10.1145/3498537',
  },
  {
    id: 'grn-multiview', group: 'sp', year: 2026,
    venue: 'Briefings in Bioinformatics',
    ranks: ['SCI 2区'], roles: ['co'],
    title: 'Revealing Hidden Regulatory Dependencies: Multi-Perspective Graph Learning for Single-Cell Gene Regulatory Network Inference',
    authors: ['Wenying He', 'Rentao Zhang', 'Yaowei Zhu', 'Haolu Zhou', 'Yude Bai', 'Liang Yang', 'Fei Guo*'],
    url: 'https://doi.org/10.1093/bib/bbaf733',
  },
  {
    id: 'lgatformer', group: 'sp', year: 2025,
    venue: 'IEEE BIBM 2025',
    ranks: ['CCF B'], roles: ['co'],
    title: 'LGATFormer: A Dual-Path Model Combining Line Graph Attention and Transformer for Gene Regulatory Network Inference',
    authors: ['Wenying He', 'Yaowei Zhu', 'Rentao Zhang', 'Haolu Zhou', 'Yude Bai', 'Fei Guo*'],
    url: 'https://doi.org/10.1109/BIBM66473.2025.11356334',
  },
  {
    id: 'diff-se', group: 'sp', year: 2025,
    venue: 'Journal of Chemical Information and Modeling (JCIM)',
    ranks: ['SCI 2区'], roles: ['co'],
    title: 'Diff-SE: A Diffusion-Augmented Contrastive Learning Framework for Super-Enhancer Prediction',
    authors: ['Haolu Zhou', 'Yu Han', 'Yude Bai', 'Yun Zuo', 'Wenying He*', 'Fei Guo*'],
    url: 'https://doi.org/10.1021/acs.jcim.5c01005',
  },
  {
    id: 'dummy-trajectory', group: 'sp', year: 2025,
    venue: 'IEEE Internet of Things Journal',
    ranks: ['SCI 1区'], roles: ['co'],
    title: 'Dummy-Trajectory Synthesis: A Privacy-Preserving Approach for Semantic Trajectory Data in IoT-Based LBSN',
    authors: ['Minhong Dong', 'Ze Wang*', 'Zhuo Han', 'Xiaoqi Wang', 'Yude Bai', 'Xiaohu Ye', 'Guangquan Xu*', 'Naixue Xiong'],
    url: 'https://doi.org/10.1109/JIOT.2025.3587442',
  },
  {
    id: 'pefn', group: 'sp', year: 2025,
    venue: 'IEEE Internet of Things Journal',
    ranks: ['SCI 1区'], roles: ['co'],
    title: 'PEFN: A Patches Enhancement and Hierarchical Fusion Network for Robust Vehicle Re-Identification',
    authors: ['Wenying He', 'Guangquan Xu*', 'Feiyu Wang', 'Fei Guo*', 'Yude Bai', 'Neal N. Xiong'],
    url: 'https://doi.org/10.1109/JIOT.2025.3561186',
  },
  {
    id: 'nbcr-ac4c', group: 'sp', year: 2024,
    venue: 'Journal of Chemical Information and Modeling (JCIM)',
    ranks: ['SCI 2区'], roles: ['co'],
    title: 'NBCR-ac4C: A Deep Learning Framework Based on Multivariate BERT for Human mRNA N4-Acetylcytidine Sites Prediction',
    authors: ['Wenying He', 'Yu Han', 'Yun Zuo', 'Yude Bai', 'Fei Guo*'],
    url: 'https://doi.org/10.1021/acs.jcim.4c01415',
  },
];

/* ---------------------------------- News ---------------------------------- */

const NEWS = [
  { d: '2026.04', en: 'Our paper on vehicle re-identification, <em>DualDis</em>, was accepted by <b>WWW 2026</b> (Oral, CCF A).', zh: '车辆重识别论文 <em>DualDis</em> 被 <b>WWW 2026</b> 录用（Oral 报告，CCF A）。' },
  { d: '2026.01', en: 'One paper on cross-domain user association accepted by <b>AAAI 2026</b> (CCF A).', zh: '1 篇跨域用户关联论文被 <b>AAAI 2026</b> 录用（CCF A）。' },
  { d: '2026', en: '<em>Knowledge is Power</em> accepted by <b>IEEE TMC</b>, <em>LIMR</em> by <b>IEEE TSC</b>, <em>Rubato</em> by <b>IEEE TDSC</b> — all CCF A journals.', zh: '<em>Knowledge is Power</em> 被 <b>IEEE TMC</b> 录用，<em>LIMR</em> 被 <b>IEEE TSC</b> 录用，<em>Rubato</em> 被 <b>IEEE TDSC</b> 录用（均为 CCF A 期刊）。' },
  { d: '2026', en: 'Two papers accepted by <b>RAID 2026</b> (CCF B), including <em>AndroTruth</em>, a reliable benchmark Android malware dataset.', zh: '2 篇论文被 <b>RAID 2026</b> 录用（CCF B），包括可靠基准安卓恶意软件数据集 <em>AndroTruth</em>。' },
  { d: '2026', en: '<em>BioLemons</em> accepted by <b>DASFAA 2026</b>; gene-regulatory-network paper accepted by <b>Briefings in Bioinformatics</b> (SCI Q2).', zh: '<em>BioLemons</em> 被 <b>DASFAA 2026</b> 录用；基因调控网络论文被 <b>Briefings in Bioinformatics</b> 录用（SCI 2区）。' },
  { d: '2025.09', en: 'Received the First Prize of the “Textile Light” National Higher Education Teaching Achievement Competition (2025).', zh: '获 2025 年度“纺织之光”纺织高等教育教学成果竞赛一等奖。' },
  { d: '2025.08', en: 'Presented our IJCAI 2025 paper on spatiotemporal data imputation in Montréal, Canada.', zh: '在加拿大蒙特利尔分组报告 IJCAI 2025 论文（时空数据补全）。' },
  { d: '2025.05', en: 'Presented <em>LeoDroid</em> at the IEEE S&P (HMISA) workshop in San Francisco; supervised student team won the First Prize of the 18th “Challenge Cup” Tianjin competition.', zh: '在旧金山 IEEE S&P（HMISA）研讨会报告 <em>LeoDroid</em>；指导学生团队获第十八届“挑战杯”天津市一等奖。' },
];

/* -------------------------------- Projects -------------------------------- */

const PROJECTS = {
  pi: [
    { en: 'NSFC Young Scientists Fund (Category C) — Learning and Evolution Mechanisms of Malicious Behavior Patterns in Intelligent Terminal Ecosystems', zh: '国家自然基金青年科学基金项目（C类）— 智能终端生态中恶意行为模式学习与演化机制研究', meta: { en: '2027–2029 · ¥300K · Ongoing', zh: '2027–2029 · 30万 · 在研' } },
    { en: 'Industry project — Trusted Testing Software for Cloud-Chain Symbiotic Architectures', zh: '横向项目 — 针对云链共生架构的可信测试软件开发', meta: { en: '2024 · ¥50K · Completed', zh: '2024 · 5万 · 结题' } },
    { en: 'Industry project — Intelligent Management and Privacy-Preserving Algorithms for River & Lake Data', zh: '横向项目 — 河湖数据智能管护与隐私保护算法研究', meta: { en: '2025 · ¥70K · Completed', zh: '2025 · 7万 · 结题' } },
    { en: 'Industry project — Data Filtering and Cleaning for Prognosis Prediction of Primary Liver Cancer after RFA', zh: '横向项目 — 原发性肝癌射频消融术后的预后预测模型数据过滤及清洗', meta: { en: '2025–2026 · Completed', zh: '2025–2026 · 结题' } },
    { en: 'Industry project — Data Conversion and Interface Integration Technology', zh: '横向项目 — 数据转换与接口集成技术', meta: { en: '2026 · ¥49.5K · Ongoing', zh: '2026 · 4.95万 · 在研' } },
  ],
  joined: [
    { en: 'NSFC General Program — Interpretable Encoding and De Novo Design of Nucleic Acid Functional Sequences', zh: '国家自然科学基金面上项目 — 核酸功能序列可解释编码表征学习与从头设计方法研究', meta: { en: '2027–2030 · ¥500K', zh: '2027–2030 · 50万' } },
    { en: 'National Key R&D Program — Secure Sharing Mechanisms and Trusted Analysis for Cross-Cohort Data', zh: '国家重点研发计划 — 跨队列数据安全共享机制和可信分析技术研究', meta: { en: '2021–2024 · ¥3.67M', zh: '2021–2024 · 367万' } },
    { en: 'NSFC Young Scientists Fund (C) — Explainability of ML-Based Android Malware Detection', zh: '国家自然科学基金青年科学基金项目（C类）— 基于机器学习的安卓恶意软件检测模型的可解释性研究', meta: { en: '2022–2024 · ¥300K', zh: '2022–2024 · 30万' } },
    { en: 'NSFC General Program — Analysis Methods for Loops and Recursion', zh: '国家自然科学基金面上项目 — 循环和递归的分析方法研究', meta: { en: '2019–2022 · ¥650K', zh: '2019–2022 · 65万' } },
    { en: 'NSFC General Program — Security Technologies for Mobile Applications under Ubiquitous Access', zh: '国家自然科学基金面上项目 — 泛在接入条件下移动应用安全关键技术研究', meta: { en: '2016–2019 · ¥775K', zh: '2016–2019 · 77.5万' } },
    { en: 'Tianjin Natural Science Foundation Key Program — Data Intelligence Models for Petrochemical Production Management', zh: '天津市自然科学基金重点项目 — 石化生产管控工业软件数据智能模型的研究与应用', meta: { en: '2025–2028 · ¥200K', zh: '2025–2028 · 20万' } },
    { en: 'Tianjin Manufacturing High-Quality Development Program — Digital-Intelligence Safety Platform for the Energy Industry', zh: '天津市制造业高质量发展专项 — 能源工业安全生产数智化管控平台研发', meta: { en: '2024–2026 · ¥1.5M', zh: '2024–2026 · 150万' } },
  ],
};

/* -------------------------------- Students -------------------------------- */

const STUDENTS = [
  { year: 2024, members: [{ zh: '刘建卓', en: 'Jianzhuo Liu', school: { zh: '天津工业大学', en: 'Tiangong University' } }] },
  { year: 2025, members: [
    { zh: '贾梦威', en: 'Mengwei Jia', school: { zh: '天津工业大学', en: 'Tiangong University' } },
    { zh: '刘子天', en: 'Zitian Liu', school: { zh: '天津工业大学', en: 'Tiangong University' } },
    { zh: '钱鹏吉', en: 'Pengji Qian', school: { zh: '天津工业大学', en: 'Tiangong University' } },
    { zh: '梁鑫淼', en: 'Xinmiao Liang', school: { zh: '天津工业大学', en: 'Tiangong University' } },
  ] },
  { year: 2026, members: [
    { zh: '谭紫涵', en: 'Zihan Tan', school: { zh: '天津工业大学', en: 'Tiangong University' } },
    { zh: '李孟时', en: 'Mengshi Li', school: { zh: '天津工业大学', en: 'Tiangong University' } },
    { zh: '吴昊龙', en: 'Haolong Wu', school: { zh: '天津工业大学', en: 'Tiangong University' } },
  ] },
];

/* ---------------------------- Patents & Software --------------------------- */

const PATENTS = [
  { y: '2025.10', type: 'authorized', en: 'A pneumonia classification device for chest X-ray images', zh: '一种胸部 X 光图像肺炎分类装置' },
  { y: '2026.09', type: 'authorized', en: 'AI- and digital-twin-based collaborative deduction method and system for energy-industry safety', zh: '基于 AI 与数字孪生的能源工业安全协同推演方法及系统' },
  { y: '2026.09', type: 'filed', en: 'Joint evaluation of prompt strategies and model scales for multi-label Android malware detection (spectral clustering)', zh: '一种基于谱聚类的多提示策略与模型规模联合评估的安卓恶意软件多标签检测方法' },
  { y: '2026.08', type: 'filed', en: 'Phase-aligned causal interpretable soft-sensing method and device for petrochemical processes', zh: '面向石化过程的相位对齐因果可解释软测量方法及装置' },
  { y: '2026.07', type: 'filed', en: 'Petroleum production forecasting via a decoupled gated Transformer framework', zh: '一种基于解耦门控 Transformer 框架的石油产量预测方法' },
  { y: '2026.04', type: 'filed', en: 'Link flow velocity prediction and confidence ranking via dual-scale temporal feature fusion', zh: '基于双尺度时序特征融合的链路流速预测与可信度排序方法' },
  { y: '2025.11', type: 'filed', en: 'Knowledge graph construction and fusion for the engine technology domain', zh: '一种用于发动机技术领域的知识图谱构建与融合方法' },
  { y: '2025.11', type: 'filed', en: 'Differential-privacy-based protection of river trajectory data', zh: '一种基于差分隐私的河流轨迹数据保护方法' },
  { y: '2025.07', type: 'filed', en: 'Robust image classification via dynamic multi-scale modules', zh: '基于动态多尺度模块的鲁棒图像分类方法' },
  { y: '2025.05', type: 'filed', en: 'River velocity forecasting via temporal detection and long-short-term feature fusion', zh: '基于时序检测与长短期特征融合的河流流速预测方法' },
  { y: '2025.04', type: 'filed', en: 'LLM-based few-shot multi-label Android malware detection', zh: '一种基于 LLM 的少样本多标签安卓恶意软件检测方法' },
  { y: '2025.04', type: 'filed', en: 'Core-set active learning for multi-label Android malware detection', zh: '一种基于核心集主动学习的安卓恶意软件多标签检测方法' },
  { y: '2024.12', type: 'filed', en: 'Multi-path feature fusion and active learning for Android malware classification', zh: '基于多路径特征融合与主动学习的安卓恶意软件分类方法' },
  { y: '2024.09', type: 'filed', en: 'Background-knowledge-based protection of personnel trajectory data', zh: '一种基于背景知识的人员轨迹安全保护方法' },
  { y: '2015.05', type: 'filed', en: 'Security assessment method for cloud architectures', zh: '云架构安全评估方法' },
  { y: '2026.07', type: 'copyright', en: 'Privacy-preserving trajectory generation and evaluation system for hydrological data', zh: '水文数据隐私轨迹生成与评估系统' },
  { y: '2026.07', type: 'copyright', en: '“Eye of the Lung” — intelligent pneumonia imaging analysis app', zh: '肺腑之眼 — 肺炎影像智能分析 APP' },
  { y: '2026.07', type: 'copyright', en: 'PneumoNeXt-AI intelligent pneumonia imaging diagnosis system', zh: 'PneumoNeXt-AI 肺炎影像智能辅助诊断系统' },
  { y: '2025.08', type: 'copyright', en: 'EfficientNet-BSFT-S-based image classification software', zh: '基于 EfficientNet-BSFT-S 的图像分类软件' },
  { y: '2025.06', type: 'copyright', en: 'Core-set active learning based multi-label Android malware detection system', zh: '基于核心集主动学习的安卓恶意软件多标签检测系统' },
  { y: '2024.12', type: 'copyright', en: 'Multi-path feature fusion and active learning based Android malware classification system', zh: '基于多路径特征融合与主动学习的安卓恶意软件分类系统' },
];
