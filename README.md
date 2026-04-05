# 🎨 Modern React Portfolio - 2026 Design Edition

A **beautiful, responsive, and fully-featured portfolio website** built with React, featuring modern design patterns, glassmorphism effects, smooth animations, and a fully functional contact form with email integration.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-19.2-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)
![Status: Active](https://img.shields.io/badge/Status-Active-success.svg)

---

## ✨ **Key Features**

### 🎯 **Core Sections**
- **Hero Section** - Eye-catching introduction with headline and tagline
- **About Me** - Biography with key highlights
- **Skills** - Organized by category with badge styling
- **Experience** - Detailed work history with achievements
- **Projects** - Showcase of your best work with tech stack and links
- **Education** - Academic background and certifications
- **Contact** - Fully functional form with email integration
- **Sticky Navigation** - Smooth scrolling with active section highlighting
- **Footer** - With dark/light theme toggle

### 🎨 **Modern Design Elements**
- **Glassmorphism** - Frosted glass effect cards with backdrop blur
- **Smooth Animations** - Scroll-triggered fade-in and slide effects
- **Micro-interactions** - Hover effects, button feedback, loading states
- **Dark/Light Theme** - Seamless mode switching with persistence
- **Responsive Typography** - Fluid font sizing that adapts to screen size
- **Gradient Accents** - Modern color transitions and overlays
- **Professional Layout** - CSS Grid & Flexbox with proper spacing

### ⚡ **Performance & Accessibility**
- **Fast Loading** - Optimized CSS and minimal dependencies
- **SEO Ready** - Semantic HTML with proper heading hierarchy
- **Accessible** - WCAG 2.1 compliant with keyboard navigation
- **Mobile First** - Perfect on all screen sizes (480px - 1920px+)
- **Smooth Scrolling** - Hardware-accelerated animations
- **Reduced Motion Support** - Respects user preferences

### 💌 **Contact Form Features**
- **Real-time Validation** - Instant feedback on input errors
- **Email Integration** - Direct email delivery via EmailJS
- **Spam Protection** - Built-in honeypot field
- **Success/Error Messages** - User-friendly feedback
- **Loading States** - Visual feedback during submission
- **Responsive Design** - Perfect on all devices

---

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ and npm
- Git (optional)
- A free EmailJS account (for contact form)

### Installation

```bash
# 1. Navigate to project folder
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Deploy to Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy via Vercel
npm install -g vercel
vercel
```

---

## 🔧 **Configuration**

### Step 1: Setup EmailJS (Contact Form)

1. **Create free account**: https://www.emailjs.com/
2. **Get Public Key**: Account → API Keys → Copy Public Key
3. **Create Email Service**: Gmail, Outlook, or custom SMTP
4. **Create Email Template** with variables:
   - `{{from_name}}`
   - `{{email}}`
   - `{{subject}}`
   - `{{message}}`

5. **Update** `src/components/sections/Contact.jsx`:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_xxxxx';     // Your Service ID
   const EMAILJS_TEMPLATE_ID = 'template_xxxxx';   // Your Template ID
   const EMAILJS_PUBLIC_KEY = 'xxxxx';             // Your Public Key
   ```

**→ See [SETUP.md](./SETUP.md) for detailed step-by-step guide**

### Step 2: Customize Your Content

Edit `src/data/content.js`:

```javascript
export const persona = {
  name: "Your Name",
  role: "Your Title",
  email: "your-email@example.com",
  phone: "+1-234-567-8900",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  // ... customize all fields
};
```

---

## 📁 **Project Structure**

```
Portfolio/
├── src/
│   ├── components/layout/      # Navbar, Footer, Section wrapper
│   ├── components/sections/    # Hero, About, Skills, Projects, etc.
│   ├── data/
│   │   └── content.js          # ⭐ YOUR CONTENT (EDIT THIS)
│   ├── styles/
│   │   ├── variables.css       # CSS custom properties & theme
│   │   ├── global.css          # Global styles & animations
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── public/                      # Static assets
├── SETUP.md                     # 📖 Email setup guide
├── README.md                    # (This file)
└── package.json

```

---

## 🎨 **Design System**

### Colors (Variables)

Edit `src/styles/variables.css`:

```css
:root {
  --accent-primary: #6366f1;      /* Main brand color */
  --accent-secondary: #10b981;    /* Secondary color */
  --accent-tertiary: #f59e0b;     /* Accent color */
  --text-primary: #1a1a2e;        /* Main text */
  --text-secondary: #4a5568;      /* Secondary text */
}

[data-theme="dark"] {
  --accent-primary: #818cf8;
  --text-primary: #f1f5f9;
  /* ...dark theme variables */
}
```

### Responsive Typography

Font sizes automatically adapt to screen size:

```css
--fs-xs: clamp(0.75rem, 1vw, 0.875rem);
--fs-3xl: clamp(2.25rem, 4vw, 3rem);
/* Scales smoothly between min and max */
```

---

## 🎬 **Animation Effects**

### Scroll-Triggered Animations

```html
<div class="animate-fade-in-up">Content</div>
<div class="animate-fade-in-right delay-200">Delayed content</div>
```

Available animations:
- `animate-fade-in-up` / `down` / `left` / `right`
- `animate-scale-in`
- `animate-float`

With staggered delays: `.delay-100`, `.delay-200`, `.delay-300`, etc.

---

## 🌓 **Dark/Light Theme**

### How It Works

1. **Auto-detection**: Uses system preference on first load
2. **Toggle**: Click button in footer to switch
3. **Persistence**: Saves choice in browser `localStorage`

### Customize Theme Colors

Edit `src/styles/variables.css`:

```css
:root {
  /* Light mode */
  --bg-primary: #f8f9fa;
  --text-primary: #1a1a2e;
}

[data-theme="dark"] {
  /* Dark mode */
  --bg-primary: #0f172a;
  --text-primary: #f1f5f9;
}
```

---

## 📱 **Responsive Design**

Automatic breakpoints:

| Device | Width | Adjustment |
|--------|-------|-----------|
| Mobile | < 480px | Single column, stacked layout |
| Tablet | 480px - 768px | 2-column grid |
| Laptop | 768px - 1024px | 3-column grid |
| Desktop | > 1024px | Full layout |

All components use Flexbox & Grid for perfect responsiveness.

---

## 🔐 **Security**

- ✅ **Email credentials**: Public keys only (safe)
- ✅ **Form validation**: Client + server-side
- ✅ **Spam protection**: Honeypot field
- ✅ **No data tracking**: Only contact form submissions
- ✅ **HTTPS ready**: Secure by default

---

## 📊 **Browser Support**

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS/Android)

---

## 🛠️ **Available Scripts**

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📦 **Dependencies**

- **React 19.2** - UI library
- **Vite 7.3** - Lightning-fast build tool
- **lucide-react** - Beautiful icons
- **@emailjs/browser** - Email service integration

**Zero CSS frameworks** - All styling with pure CSS using modern features!

---

## 🚀 **How to Deploy**

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
# Follow prompts, auto-deploys on push
```

### Netlify

1. Push code to GitHub
2. Connect repo in Netlify dashboard
3. Build: `npm run build` → Publish: `dist`

### GitHub Pages

1. Update `package.json`: `"homepage": "https://username.github.io/portfolio"`
2. `npm run build`
3. Deploy to `gh-pages` branch

---

## 🐛 **Troubleshooting**

### Email Not Sending?
- Check EmailJS credentials in `Contact.jsx`
- Verify template variables match
- Check browser console (F12) for errors
- Ensure EmailJS service is active

### Design Issues?
- Clear cache: `Ctrl+Shift+R` (or `Cmd+Shift+R` Mac)
- Rebuild: `npm run build`
- Check CSS imports
- Verify `variables.css` is imported

### Theme Not Persisting?
- Check `localStorage` in DevTools
- Verify `data-theme` attribute on `<html>`
- Clear cookies and try again

---

## 💡 **Pro Tips**

1. **Customize early**: Update `content.js` before deploying
2. **Add your photo**: Update image in `Hero.jsx`
3. **Test mobile**: Use DevTools device toggle (F12)
4. **Optimize images**: Use WebP format
5. **Keep updated**: Regularly update projects and experience
6. **Monitor form**: Check EmailJS dashboard for submissions

---

## 📝 **License**

MIT License - Use freely, modify, and share!

---

## 🤝 **Contributing**

Have ideas for improvements? Found a bug? Feel free to contribute!

**Suggested enhancements:**
- Blog section
- Testimonials
- Project filtering
- Analytics integration
- Case studies

---

## 📚 **Additional Resources**

- **Setup Guide**: [SETUP.md](./SETUP.md)
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **EmailJS Docs**: https://www.emailjs.com/docs
- **CSS Animations**: https://animista.net/

---

## 📧 **Questions?**

1. Check [SETUP.md](./SETUP.md) for configuration help
2. Review inline code comments
3. Check browser console (F12) for errors
4. Read component CSS files for styling details

---

**Built with ❤️ | Modern, Fast, Beautiful**

⭐ If you find this helpful, give it a star!

---

*Last Updated: April 2026*
