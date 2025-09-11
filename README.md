# AI极客 - 企业官网

以科技感设计打造的静态官网，底部标注“泉州市微咖网络科技有限公司”。可一键部署至 Vercel。

## 项目结构
- index.html          首页（关于、产品与服务、解决方案、联系）
- styles.css          全站样式（深色、渐变、霓虹高光、响应式）
- script.js           背景粒子动画与表单本地演示
- favicon.svg         站点图标
- vercel.json         Vercel 配置（静态托管）

## 本地预览
在 macOS 终端进入项目目录后：
```bash
python3 -m http.server 5173
# 浏览器打开 http://localhost:5173
```

或使用任意静态服务器工具（如 `npx serve`）。

## 部署到 Vercel 步骤
1) 安装/登录
- 访问 https://vercel.com 注册或使用 GitHub 登录
- 本地安装 CLI（可选）：
  ```bash
  npm i -g vercel
  vercel login
  ```

2) 代码托管到 Git（推荐）
- 初始化 Git 并推送至 GitHub（或 Gitee）：
  ```bash
  git init
  git add .
  git commit -m "feat: 初版 AI极客 官网"
  git branch -M main
  # 创建一个空仓库，例如 github.com/yourname/aigeek-site
  git remote add origin git@github.com:yourname/aigeek-site.git
  git push -u origin main
  ```

3) 在 Vercel 创建项目
- 打开 https://vercel.com/new 选择 Git 仓库
- 框架选择 “Other”，根目录使用当前项目根目录
- 构建配置：
  - Build Command：无（留空）
  - Output Directory：根目录（留空）或 `.`
  - 由于是纯静态，Vercel 将直接部署
- 首次部署完成后获得域名（如 https://aigeek-site.vercel.app）

4) 使用 vercel.json（可选）
- 已提供 `vercel.json`，Vercel 会自动识别静态站点
- 如使用 CLI，在项目根目录执行：
  ```bash
  vercel --prod
  ```
  首次会询问项目名和团队，按提示选择/创建即可

5) 绑定自定义域名（可选）
- 在 Vercel 项目设置中添加自定义域名
- 按提示在域名DNS服务商添加 CNAME 解析到 `cname.vercel-dns.com`

## 常见问题
- 页面404：确保项目根目录包含 `index.html`，并已推送到链接的分支。
- 样式或脚本不生效：检查 `styles.css` 与 `script.js` 路径是否为根路径 `/` 或相对路径一致。
- 中国大陆访问速度：可绑定自定义域名并使用国内加速的 DNS/CDN。

## 版权信息
© 泉州市微咖网络科技有限公司。All rights reserved.