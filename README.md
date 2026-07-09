# 灵犀命盘正式版源码

这是灵犀命盘 AI 命理产品的最终正式版 Next.js 源码工程。项目保留现有首页、命盘、五行主题、昼夜动态、Guardian/AI 命理师页面、聊天页面、声音与 API 调用逻辑，可以直接提交到 GitHub 并部署到 Vercel。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run start
```

## Vercel 环境变量

在 Vercel 项目设置中添加：

```bash
SILICONFLOW_API_KEY=你的硅基流动 API Key
```

## 项目结构

- `app/`：Next.js App Router 页面、布局、API Route
- `components/`：客户端应用挂载组件
- `lib/`：应用初始结构数据
- `public/runtime/app.js`：浏览器交互运行时
- `public/themes/`：十天干主题配置
- `public/sounds/`：主题与事件音频素材占位目录

## 部署说明

Vercel 导入仓库时，Root Directory 选择项目根目录，也就是包含 `package.json` 的目录。Build Command 使用默认的 `npm run build`，Output Directory 保持默认即可。
