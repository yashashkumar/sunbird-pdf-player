# Sunbird PDF Player - Vite React Test App

This is a test React application created with Vite to demonstrate the **automated integration** of the Sunbird PDF Player web component, replicating Angular's `angular.json` configuration.

## 🎯 Automated Setup (No Manual Steps!)

This app automatically handles everything that Angular's `angular.json` does:

### ✅ What Happens Automatically

1. **After `npm install`** → Assets are copied automatically (via `postinstall` script)
2. **During `npm run dev`** → Assets are served via Vite plugin
3. **During `npm run build`** → Assets are bundled into the production build

### 📋 Angular vs Vite React Comparison

| Angular (`angular.json`) | Vite React (this app) | Status |
|-------------------------|----------------------|--------|
| `scripts: ["jquery", "Reflect"]` | `<script>` tags in `index.html` | ✅ Automated |
| `styles: ["styles.css"]` | `import 'styles.css'` in component | ✅ Automated |
| `assets: [{glob, input, output}]` | `vite-plugin-static-copy` + `postinstall` | ✅ Automated |

## 🚀 Quick Start

```bash
# Install dependencies (assets copy automatically)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

That's it! No manual steps required.

## 🔧 How the Automation Works

### 1. **Postinstall Script** (`package.json`)
```json
{
  "scripts": {
    "postinstall": "node copy-assets.js"
  }
}
```

Runs automatically after `npm install` to copy assets from:
```
node_modules/@yashash_sanketika/sunbird-pdf-player-web-component/assets/
→ public/assets/
```

### 2. **Vite Plugin** (`vite.config.js`)
```javascript
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [{
        src: 'node_modules/@yashash_sanketika/.../assets/**/*',
        dest: 'assets'
      }]
    })
  ]
})
```

Ensures assets are included in both dev and production builds.

### 3. **Asset Copy Script** (`copy-assets.js`)
- Automatically copies all assets from web component package
- Runs after every `npm install`
- Mirrors Angular's glob pattern behavior

## 📁 File Structure

```
test-react-app/
├── copy-assets.js              # Auto-copy script (runs on postinstall)
├── vite.config.js              # Vite config with static-copy plugin
├── index.html                  # Loads jQuery & Reflect Metadata
├── public/
│   └── assets/                 # Auto-copied from web component ✨
│       ├── pdfjs/
│       ├── icons/
│       └── ...
├── src/
│   ├── App.jsx                 # Main app
│   ├── components/
│   │   └── PdfPlayer.jsx       # Web component wrapper
│   └── main.jsx
└── package.json                # With postinstall script
```

## 🎨 Integration Pattern

### 1. **Global Dependencies** (index.html)
```html
<!-- Required by web component -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/reflect-metadata/0.1.13/Reflect.min.js"></script>
```

### 2. **Import Web Component** (PdfPlayer.jsx)
```javascript
import '@yashash_sanketika/sunbird-pdf-player-web-component';
import '@yashash_sanketika/sunbird-pdf-player-web-component/styles.css';
```

### 3. **Use in React** (PdfPlayer.jsx)
```javascript
useEffect(() => {
  const pdfElement = document.createElement('sunbird-pdf-player');
  pdfElement.setAttribute('player-config', JSON.stringify(config));
  containerRef.current.appendChild(pdfElement);
  
  return () => {
    // Cleanup
  };
}, []);
```

## ⚙️ Configuration

Edit `src/components/PdfPlayer.jsx` to customize:

```javascript
const playerConfig = {
  metadata: {
    artifactUrl: "YOUR_PDF_URL",      // Change PDF source
    streamingUrl: "YOUR_PDF_URL",
    name: "Your Document Name"
  },
  config: {
    sideMenu: {
      showShare: true,                // Show/hide share button
      showDownload: true,             // Show/hide download button
      showExit: false                 // Show/hide exit button
    },
    showStartPage: true,              // Show start screen
    showEndPage: false                // Show end screen
  }
};
```

## 📊 Events

The component emits events that you can listen to:

```javascript
pdfElement.addEventListener('playerEvent', (event) => {
  console.log('Player Event:', event.detail);
  // Handle player events (start, end, etc.)
});

pdfElement.addEventListener('telemetryEvent', (event) => {
  console.log('Telemetry Event:', event.detail);
  // Handle analytics events
});
```

## 🔄 Updating the Web Component

When you update the web component package:

```bash
# Reinstall the package
npm install ../web-component

# Assets are automatically copied via postinstall!
# No manual steps needed
```

## 🛠️ Troubleshooting

### Assets Not Found (404 errors)
```bash
# Manually run the asset copy script
npm run postinstall
# or
node copy-assets.js
```

### PDF Not Loading
1. Check browser console for errors
2. Verify assets exist in `public/assets/`
3. Ensure jQuery and Reflect Metadata loaded (check Network tab)
4. Verify PDF URL is accessible

### Styles Missing
- Ensure import in `PdfPlayer.jsx`:
  ```javascript
  import '@yashash_sanketika/sunbird-pdf-player-web-component/styles.css';
  ```

## 📦 Production Build

```bash
npm run build
```

The build output (`dist/`) will include:
- Bundled React app
- Web component assets (automatically copied)
- All required dependencies

Preview the production build:
```bash
npm run preview
```

## 🎓 Key Takeaways

1. **No Manual Steps**: Everything is automated via npm scripts and Vite plugins
2. **Angular Parity**: Replicates Angular's `angular.json` asset management
3. **Developer Friendly**: Works out of the box after `npm install`
4. **Production Ready**: Assets are properly bundled for deployment

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [vite-plugin-static-copy](https://github.com/sapphi-red/vite-plugin-static-copy)
- [Sunbird PDF Player](https://github.com/Sunbird-Knowlg/sunbird-pdf-player)
- [Web Components in React](https://react.dev/reference/react-dom/components#custom-html-elements)
