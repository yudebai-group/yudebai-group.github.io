# 白裕德 个人主页 · Yude Bai's Homepage

参考 [fuxingcheng.github.io](https://fuxingcheng.github.io/) 与
[sen-chen.github.io](https://sen-chen.github.io/) 风格的学术主页，纯静态站点（无构建工具）。

- **默认英文**，右上角按钮一键切换 **中文**（支持 `?lang=zh`，浏览器会记住选择）
- 仅收录 **CCF A/B、SCI 1/2 区、中文 T1/T2** 论文，共 27 篇
- 每篇论文带醒目的 **年份标签** + **等级徽章**（CCF A / CCF B / SCI 2区 / 中文 T2）+ 角色标签（一作/通讯/参与/Oral）
- 点击论文标题或 PDF 按钮，**站内弹窗预览 PDF**；还没有本地 PDF 的论文会先跳转出版方页面
- 版块：About / News / Publications（主体）/ Projects / Patents & Software / Students

## 本地预览

```bash
cd bai-group-web
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 GitHub Pages（`<username>.github.io` 用户主页）

1. 在 GitHub 新建仓库，仓库名必须是 `<你的用户名>.github.io`（例如 `yudebai.github.io`）。
2. 把本目录所有文件推送到该仓库的 `main` 分支：

   ```bash
   cd bai-group-web
   git init -b main
   git add .
   git commit -m "Initial homepage"
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```

3. 打开 `https://<username>.github.io` 即可（用户主页仓库无需额外设置 Pages，推送后 1–2 分钟自动生效）。

> 也可以部署为普通项目仓库（如 `bai-group-web`）：Settings → Pages → Source 选
> `Deploy from a branch` → `main` / `(root)`，网址为 `https://<username>.github.io/bai-group-web/`。
> 全部资源均为相对路径，两种方式都能直接用。

## 补充论文 PDF（重要）

已内置 10 篇 PDF（见 `pdf/`，其中 Rubato 为 IACR ePrint 预印本存档版）。其余论文的获取途径如下：

**🟢 浏览器一键免费下载（1 篇，无订阅门槛）：**

| 论文 | 直接下载链接 | 放入的文件名 |
|---|---|---|
| 基因调控网络 (BIB, 开放获取) | <https://europepmc.org/article/PMC/PMC12814975> 或 <https://doi.org/10.1093/bib/bbaf733> | `pdf/grn-multiview.pdf` |

**🔵 需要校园网 / 图书馆订阅（16 篇）：** 在天津工业大学图书馆的订阅数据库（IEEE Xplore、ACM DL、Springer、Elsevier、ACS、CNKI 等）中检索标题下载即可。

| 论文 | 建议来源 |
|---|---|
| MARS (ICSE-JAWs 2026) | [ICSE 2026 页面](https://conf.researchr.org/details/icse-2026/jaws-2026-papers/39/MARS-Few-Shot-Android-Malware-Detection-with-RAG-Enhanced-LLMs)（研讨会论文，暂无公开 PDF） |
| DualDis (WWW 2026) | [ACM DL](https://doi.org/10.1145/3774904.3792564) |
| LeoDroid (IEEE S&P-HMISA 2025) | [IEEE Xplore](https://doi.org/10.1109/SPW.2025.00042) |
| Unsuccessful Story (ICSE 2020) | [ACM DL](https://doi.org/10.1145/3377811.3380354)（页面标注 Free access，浏览器试试可直接下） |
| Trajectory Privacy (IEEE IoTJ 2026) | [IEEE Xplore](https://doi.org/10.1109/JIOT.2026.3741571) |
| LLM Audit Poster (RAID 2026) | RAID 2026 会议材料 |
| 多提示策略（小型微型计算机系统） | CNKI / [期刊官网](https://cjournal.hep.com.cn/1000-1220/CN/home) |
| BioLemons (DASFAA 2026) | [Springer](https://doi.org/10.1007/978-981-92-0369-7_3) |
| Catching mRNA (ECAI 2025) | [IOS Press](https://doi.org/10.3233/FAIA251061) |
| COMNET 2021 | [Elsevier](https://doi.org/10.1016/j.comnet.2020.107639) |
| LIMR (IEEE TSC 2026) | [IEEE Xplore](https://ieeexplore.ieee.org/document/11435625) |
| LGATFormer (IEEE BIBM 2025) | [IEEE Xplore](https://doi.org/10.1109/BIBM66473.2025.11356334)（[GitHub 代码库](https://github.com/zyw-GRN/LGATFormer)） |
| Diff-SE (JCIM 2025) | [ACS](https://doi.org/10.1021/acs.jcim.5c01005) |
| Dummy-Trajectory (IEEE IoTJ 2025) | [IEEE Xplore](https://doi.org/10.1109/JIOT.2025.3587442) |
| PEFN (IEEE IoTJ 2025) | [IEEE Xplore](https://doi.org/10.1109/JIOT.2025.3561186) |
| NBCR-ac4C (JCIM 2024) | [ACS](https://doi.org/10.1021/acs.jcim.4c01415) |

> **小技巧**：在 Google Scholar 搜索论文标题，点击“所有版本 / All versions”，经常能找到作者公开托管的免费 PDF；投稿前的预印本版本通常也可以直接使用。

**放入方式：** 把下载的 PDF 重命名为 `<id>.pdf`（上表“放入的文件名”列，其他论文对应 `pdf/<id>.pdf`，id 见 `data/content.js`）放进 `pdf/` 目录，刷新页面即自动启用弹窗预览，无需改代码。

## 内容维护

- **论文/新闻/项目/专利/学生**：全部在 `data/content.js`，中英文并列，照格式增删即可。
- **界面文案**：`js/i18n.js`（英文默认 + 中文）。
- **照片**：替换 `images/photo.jpg`。
- 首页默认语言在 `js/main.js` 顶部的 `lang` 初始化处（当前 `en`）。

## 目录结构

```
├── index.html          # 单页站点
├── css/style.css       # 样式
├── js/i18n.js          # 界面中英文案
├── js/main.js          # 语言切换 / 论文筛选 / PDF 弹窗
├── data/content.js     # 论文、新闻、项目、专利数据
├── images/photo.jpg    # 个人照片
├── pdf/                # 论文 PDF（<id>.pdf 自动识别）
├── .nojekyll           # 让 GitHub Pages 跳过 Jekyll 处理
└── .gitignore          # 排除简历源文件（含私人联系方式）
```
