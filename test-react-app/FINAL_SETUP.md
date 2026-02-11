# ✅ Sunbird PDF Player - Vite-Only Integration (Final)

## 🎉 Complete Setup - No Scripts Required!

The Sunbird PDF Player is now **fully integrated** using **Vite configuration only** - no separate copy scripts needed!

## 📋 How It Works

### Automatic Asset Copying via Vite Plugin

The `vite-plugin-static-copy` plugin handles **all asset copying** automatically during:
- ✅ `npm run dev` - Development server
- ✅ `npm run build` - Production build
- ✅ `npm run preview` - Preview production build

**No manual steps required!**

## 📁 Final File Structure

```
test-react-app/
├── public/
│   └── sample.pdf                ← Local fallback PDF
├── src/
│   ├── components/
│   │   └── PdfPlayer.jsx         ← Web component wrapper
│   ├── App.jsx
│   └── main.jsx
├── index.html                    ← Loads scripts in correct order
├── vite.config.js                ← Handles ALL asset copying
└── package.json                  ← Simple scripts (no postinstall)
```

### Build Output Structure

```
dist/
├── assets/
│   ├── pdfjs/                    ← For web component's hardcoded paths
│   ├── *.svg                     ← Icons
│   ├── pdf-player/               ← Organized copy
│   │   ├── pdfjs/
│   │   ├── *.svg
│   │   ├── sunbird-pdf-player.js
│   │   ├── styles.css
│   │   ├── package.json
│   │   └── README.md
│   ├── index-[hash].js           ← React app bundle
│   └── index-[hash].css          ← App styles
└── index.html
```

## ⚙️ Vite Configuration Explained

### 1. Asset Copying (Build Time)

```javascript
viteStaticCopy({
  targets: [
    // Copy to /assets/ for web component compatibility
    {
      src: 'node_modules/@yashash_sanketika/sunbird-pdf-player-web-component/assets/**/*',
      dest: 'assets'
    },
    // Copy to /assets/pdf-player/ for organization
    {
      src: 'node_modules/@yashash_sanketika/sunbird-pdf-player-web-component/assets/**/*',
      dest: 'assets/pdf-player'
    },
    {
      src: 'node_modules/@yashash_sanketika/sunbird-pdf-player-web-component/*.{js,css,json,md}',
      dest: 'assets/pdf-player'
    }
  ]
})
```

**What this does:**
- Copies **196 asset files** to `/assets/` (web component expects them here)
- Copies **196 asset files** to `/assets/pdf-player/` (organized)
- Copies **4 root files** to `/assets/pdf-player/` (js, css, json, md)
- **Total: 396 items copied** automatically

### 2. Dev Server Proxy (Development Only)

```javascript
server: {
  proxy: {
    '^/assets/(?!pdf-player)': {
      target: 'http://localhost:5173',
      rewrite: (path) => path.replace(/^\/assets\//, '/assets/pdf-player/')
    }
  }
}
```

**What this does:**
- In dev mode, rewrites `/assets/pdfjs/...` → `/assets/pdf-player/pdfjs/...`
- Keeps dev environment organized
- Production doesn't need this (assets are in both locations)

## 🚀 Usage

### Development

```bash
npm run dev
# → Vite starts dev server
# → Plugin copies assets automatically
# → Proxy rewrites paths
# → Opens at http://localhost:5173
```

### Production Build

```bash
npm run build
# → Vite builds for production
# → Plugin copies 396 items to dist/assets/
# → Creates optimized bundles
# → Output in dist/ folder
```

### Preview Production

```bash
npm run preview
# → Serves production build
# → Opens at http://localhost:4173
```

## 📊 Asset Management

| Location | Purpose | Files |
|----------|---------|-------|
| `dist/assets/` | Web component compatibility | 196 assets |
| `dist/assets/pdf-player/` | Organized copy + root files | 196 assets + 4 files |
| **Total** | | **396 items** |

## ✅ Advantages of Vite-Only Approach

1. **No separate scripts** - Everything in `vite.config.js`
2. **Works automatically** - No postinstall hooks needed
3. **Consistent** - Same behavior in dev and build
4. **Fast** - Vite handles copying efficiently
5. **Simple** - One configuration file to maintain

## 🎯 Key Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        // Copies to both /assets/ and /assets/pdf-player/
      ]
    })
  ],
  server: {
    proxy: {
      // Dev-only path rewriting
    }
  }
})
```

### package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@yashash_sanketika/sunbird-pdf-player-web-component": "1.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.4.5",
    "vite-plugin-static-copy": "^0.17.0"
  }
}
```

### index.html
```html
<!doctype html>
<html lang="en">
<head>
  <!-- Dependencies (must load in order) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/reflect-metadata/0.1.13/Reflect.min.js"></script>
  
  <!-- Web Component -->
  <script src="/assets/pdf-player/sunbird-pdf-player.js"></script>
  <link rel="stylesheet" href="/assets/pdf-player/styles.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

## 🔧 Configuration

### Change PDF Source

Edit `src/components/PdfPlayer.jsx`:

```javascript
const playerConfig = {
  metadata: {
    artifactUrl: "/your-pdf.pdf",
    streamingUrl: "/your-pdf.pdf",
    name: "Your Document"
  }
};
```

### Customize Player

```javascript
config: {
  sideMenu: {
    showShare: true,
    showDownload: true,
    showExit: false
  }
}
```

## 📝 Summary

✅ **No copy scripts** - Pure Vite configuration  
✅ **Automatic copying** - Happens during dev/build  
✅ **396 items copied** - To both locations  
✅ **Dev proxy** - Clean paths in development  
✅ **Production ready** - Assets in correct locations  
✅ **Simple maintenance** - One config file  

**The integration is complete and production-ready!** 🚀
