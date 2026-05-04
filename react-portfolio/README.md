# Allan Sebz Portfolio — React Version

A modern React conversion of your premium portfolio using Vite, GSAP, Lenis smooth scroll, and advanced animations.

## 🎯 Features

✅ **Complete React Rewrite** - All vanilla JS controllers converted to React components and custom hooks  
✅ **Smooth Animations** - GSAP 3.12.5 with ScrollTrigger for scroll-based effects  
✅ **Smooth Scrolling** - Lenis library for butter-smooth scroll experience  
✅ **Custom Cursor** - Advanced cursor tracking with magnetic button effects  
✅ **Hero Canvas** - Animated particle system with connections  
✅ **Dark/Light Theme** - Persistent theme toggle with localStorage  
✅ **Responsive Design** - Mobile-first, fully responsive layouts  
✅ **Form Handling** - Formspree integration for contact form  
✅ **Project Filtering** - Category-based project filtering  
✅ **Performance** - Vite for fast development and optimized builds  

## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorTrail.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Navigation.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── SideIndex.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useAnimations.js
│   │   ├── useCursor.js
│   │   ├── useFormSpree.js
│   │   ├── useHeroCanvas.js
│   │   ├── useLenisScroll.js
│   │   └── useTheme.js
│   ├── data/
│   │   └── portfolio.js     # All portfolio data
│   ├── styles/
│   │   ├── index.css
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── animations.css
│   │   ├── responsive.css
│   │   └── components/      # Component-specific styles
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy your images folder:**
   ```bash
   cp -r ../images ./public/
   ```
   Or copy `images/` folder manually to `public/images/`

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens http://localhost:5173 automatically

## 🛠️ Development

### Hot Module Replacement (HMR)
- Changes to React components automatically reflect in the browser
- CSS changes are instantly applied

### Building for Production
```bash
npm run build
```
Output goes to `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## 🎨 Customization

### Update Portfolio Data
Edit `src/data/portfolio.js`:
- Projects
- Experience/Education
- Services
- Tech stack
- Contact details
- Social links

### Modify Colors & Tokens
Edit `src/styles/tokens.css`:
- Color scheme (dark/light themes)
- Font families
- Spacing tokens

### Add New Sections
1. Create component in `src/components/`
2. Add styles in `src/styles/components/`
3. Import in `src/App.jsx`

## 📦 Dependencies

- **react** - UI library
- **react-dom** - DOM rendering
- **gsap** - Animation library
- **@studio-freight/lenis** - Smooth scroll
- **vite** - Build tool
- **gh-pages** - GitHub Pages deployment

## 🚢 Deployment to GitHub Pages

1. **Update `vite.config.js`** - Set correct `base` path:
   ```javascript
   base: '/YOUR_REPO_NAME/'
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## 🔄 Animation Integration

All animations are handled through:

1. **useAnimations Hook** - GSAP-based animations:
   - Hero intro animations
   - Scroll-triggered fade-ins
   - Split text animations
   - Skill bar fill animations
   - Stats counters

2. **useLenisScroll Hook** - Smooth scrolling:
   - Integrates Lenis with GSAP ticker
   - Provides `scrollTo()` method
   - Tracks scroll velocity

3. **useHeroCanvas Hook** - Canvas particle animation:
   - Animated particles with connections
   - Responsive to window resize

4. **useCursor Hook** - Custom cursor effects:
   - Magnetic button effects
   - Interactive element detection
   - Smooth cursor tracking

## 🎭 Theme System

Toggle between dark and light themes using `useTheme` hook:
- Automatically persists to localStorage
- CSS variables switch via `data-theme` attribute
- All components respond to theme changes instantly

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with side navigation
- **Tablet (1024px)**: Adjusted spacing and sizing
- **Mobile (768px)**: Hidden side nav, mobile menu activated
- **Small Mobile (480px)**: Optimized font sizes and layouts

## 🔧 Troubleshooting

### GSAP/ScrollTrigger not working
- Ensure GSAP scripts are loaded via CDN in `index.html`
- Check browser console for errors

### Lenis scroll not smooth
- Verify `@studio-freight/lenis` is installed
- Check `useLenisScroll` hook initialization in `App.jsx`

### Images not loading
- Place images in `public/images/` directory
- Update image paths in `src/data/portfolio.js` to use `/images/...`

### Form not sending
- Verify Formspree endpoint in `useFormSpree` hook
- Check browser Network tab for submission requests

## 📝 Key Migration Notes

**From Vanilla JS to React:**
- All DOM event listeners converted to React event handlers
- CSS classes toggled via React state
- Animation controllers → Custom hooks
- Global variables → React context (extensible)
- Vanilla form handling → useFormSpree hook

## 🎯 Next Steps

1. ✅ Replace image paths - move original `images/` to `public/images/`
2. ✅ Update contact form ID if different
3. ✅ Test all interactive features
4. ✅ Deploy to GitHub Pages
5. ✅ Update README in main repo

## 📄 License

Your original project's license applies

---

**Built with ❤️ using React + Vite + GSAP + Lenis**
