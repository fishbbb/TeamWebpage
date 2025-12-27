<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1TjcIg-QZb42RBCNmZ8z8j_2_ka6-fY8F

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

项目已配置好 GitHub Pages 自动部署。按照以下步骤操作：

1. **启用 GitHub Pages**：
   - 前往仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

2. **推送代码**：
   - 将所有更改提交并推送到 `main` 分支
   - GitHub Actions 会自动构建并部署项目

3. **访问网站**：
   - 部署完成后，网站将在以下地址可用：
   - `https://fishbbb.github.io/TeamWebpage/`

**注意**：首次部署可能需要几分钟时间。后续每次推送到 `main` 分支都会自动触发重新部署。
