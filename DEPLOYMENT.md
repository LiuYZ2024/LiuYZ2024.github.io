# 部署到 GitHub Pages 指南

## 📋 前置准备

1. 确保你有 GitHub 账号
2. 确保本地已安装 Git

## 🚀 部署步骤

### 1. 创建 GitHub 仓库

有两种选择：

**选项 A：用户/组织站点（推荐）**
- 仓库名：`LiuYZ2024.github.io`
- 访问地址：`https://LiuYZ2024.github.io`
- `vite.config.ts` 中保持 `base: '/'`

**选项 B：项目站点**
- 仓库名：任意名称（如 `portfolio`）
- 访问地址：`https://LiuYZ2024.github.io/portfolio`
- 需要修改 `vite.config.ts` 中的 `base: '/portfolio/'`

### 2. 初始化 Git 仓库（如果还没有）

```bash
cd d:\desk_me\webpage2\yaoze-liu-portfolio
git init
git add .
git commit -m "Initial commit"
```

### 3. 关联远程仓库

```bash
# 替换为你的仓库地址
git remote add origin https://github.com/LiuYZ2024/LiuYZ2024.github.io.git
git branch -M main
git push -u origin main
```

### 4. 配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** (设置)
3. 左侧菜单找到 **Pages**
4. 在 **Source** 下选择：
   - Source: **GitHub Actions**

### 5. 推送代码触发部署

```bash
git push
```

GitHub Actions 会自动：
- 安装依赖
- 构建项目
- 部署到 GitHub Pages

### 6. 查看部署状态

1. 进入仓库的 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待绿色勾号（部署成功）

## 🔧 如果使用项目站点

如果你的仓库名不是 `LiuYZ2024.github.io`，需要修改 `vite.config.ts`：

```typescript
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/你的仓库名/',  // 例如：'/portfolio/'
      // ... 其他配置
    };
});
```

## 📝 后续更新

每次修改代码后：

```bash
git add .
git commit -m "更新描述"
git push
```

GitHub Actions 会自动重新部署。

## ⚠️ 常见问题

### 问题 1：页面显示 404
- 检查 `vite.config.ts` 中的 `base` 配置是否正确
- 确认 GitHub Pages 设置中 Source 选择了 "GitHub Actions"

### 问题 2：图片不显示
- 确保图片路径以 `/` 开头（如 `/images/xxx.png`）
- 检查图片文件是否在 `public` 目录下

### 问题 3：部署失败
- 查看 Actions 标签中的错误日志
- 确认 `package.json` 中的依赖都正确安装

## 🎉 完成

访问你的网站：
- 用户站点：`https://LiuYZ2024.github.io`
- 项目站点：`https://LiuYZ2024.github.io/仓库名`

