# 🚀 Quick Start Guide - React Portfolio

## Step 1: Setup (Choose Your OS)

### Windows Users:
```bash
cd react-portfolio
setup.bat
```

### macOS / Linux Users:
```bash
cd react-portfolio
chmod +x setup.sh
./setup.sh
```

### Manual Setup:
```bash
cd react-portfolio
npm install
mkdir -p public/images
```

---

## Step 2: Copy Your Images

Copy your original `images/` folder into `react-portfolio/public/images/`

```bash
cp -r ../images ./public/
```

Or manually copy these files to `react-portfolio/public/images/`:
- me.jpeg
- therm.jpg
- ecom.jpg
- acess.jpg
- dash.png
- api.png
- agrr.png

---

## Step 3: Start Development Server

```bash
npm run dev
```

The site opens automatically at http://localhost:5173

---

## Step 4: Test Everything

- ✅ Scroll and check animations
- ✅ Click theme toggle (top right)
- ✅ Test mobile menu on small screens
- ✅ Try project filtering
- ✅ Test contact form
- ✅ Hover over cursor (should see custom cursor)
- ✅ Click side navigation dots

---

## Step 5: Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready for deployment

---

## Step 6: Deploy to GitHub Pages

### Option A: Automatic (Recommended)
```bash
npm run deploy
```

### Option B: Manual
1. Build: `npm run build`
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

---

## Troubleshooting

### Q: GSAP animations not working?
**A:** Ensure GSAP is loaded via CDN in `index.html`

### Q: Smooth scroll not working?
**A:** Check browser console, verify Lenis is loaded

### Q: Images not showing?
**A:** Make sure images are in `public/images/` directory

### Q: Form not sending?
**A:** Check Formspree endpoint in `src/hooks/useFormSpree.js`

### Q: Port 5173 already in use?
**A:** Run `npm run dev -- --port 3000` to use different port

---

## File Structure to Know

```
react-portfolio/
├── src/
│   ├── components/      # All React components
│   ├── hooks/           # Custom hooks (animations, scroll, form)
│   ├── data/            # portfolio.js with all content
│   ├── styles/          # All CSS files
│   └── App.jsx          # Root component
├── public/
│   └── images/          # Your portfolio images
├── index.html           # Vite entry point
├── vite.config.js       # Build configuration
└── package.json         # Dependencies & scripts
```

---

## npm Scripts Reference

```bash
npm run dev      # Start development server (with HMR)
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to GitHub Pages
```

---

## Customization

### Change Portfolio Content
Edit `src/data/portfolio.js`:
```javascript
export const PROJECTS = [ ... ]
export const EXPERIENCE = { ... }
export const SERVICES = [ ... ]
```

### Change Colors
Edit `src/styles/tokens.css`:
```css
:root {
  --accent: #4af4b0;      /* Primary color */
  --accent2: #7c5cfc;     /* Secondary color */
  /* ... more colors */
}
```

### Add New Section
1. Create `src/components/NewSection.jsx`
2. Add styles in `src/styles/components/newsection.css`
3. Import in `src/App.jsx`

---

## Performance Tips

- Vite provides fast HMR (Hot Module Replacement)
- CSS is optimized and minified on build
- GSAP animations are GPU-accelerated
- Lenis provides smooth 60fps scrolling

---

## Need Help?

1. Check `README.md` for detailed documentation
2. Review `src/components/*.jsx` for component usage
3. Check `src/hooks/*.js` for hook implementation
4. Inspect browser DevTools console for errors

---

**You're all set! 🎉 Happy coding!**
