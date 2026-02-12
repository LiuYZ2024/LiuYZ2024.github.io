# 图片资源使用指南

## 📁 文件夹结构

```
public/images/
  ├── projects/     # 项目配图
  └── research/     # 科研项目配图
```

## 🖼️ 如何添加图片

### 1. 本地图片（推荐）

将图片放入对应文件夹，然后在 `data.tsx` 中引用：

```typescript
// 项目配图示例
{
  title: "Jittor Skeleton & Skinning",
  imageUrl: "/images/projects/jittor-skeleton.png",
  // ... 其他配置
}

// 科研项目配图示例
{
  title: "SymBridge",
  imageUrl: "/images/research/symbrige-demo.gif",
  // ... 其他配置
}
```

### 2. 使用 GitHub 图床

上传图片到 GitHub 仓库，使用 raw 链接：

```typescript
imageUrl: "https://raw.githubusercontent.com/你的用户名/仓库名/main/path/to/image.png"
```

### 3. 使用在线图床

- **Imgur**: https://imgur.com/
- **ImgBB**: https://imgbb.com/
- **Cloudinary**: https://cloudinary.com/

## 📝 图片命名建议

- 使用小写字母和连字符
- 描述性命名：`jittor-skeleton-result.png`
- GIF 动图：`valentine-game-demo.gif`

## ✅ 支持的格式

- 图片：`.png`, `.jpg`, `.jpeg`, `.webp`
- 动图：`.gif`

## 💡 优化建议

- 图片尺寸：建议宽度 800-1200px
- 文件大小：单张图片 < 2MB，GIF < 5MB
- 使用工具压缩：TinyPNG, ImageOptim

