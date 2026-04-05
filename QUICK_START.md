# 🚀 Quick Reference Guide - Modern Portfolio

## Email Setup (Most Important First!)

### 1. Get EmailJS Credentials (5 minutes)
```
1. Go to https://www.emailjs.com/ → Sign Up (FREE)
2. Verify email
3. Account → API Keys → Copy "Public Key"
4. Email Services → Add Service → Choose Gmail/Outlook
5. Follow auth steps
6. Email Templates → Create Template
7. Copy Service ID & Template ID
```

### 2. Update Contact.jsx (2 minutes)
```javascript
// File: src/components/sections/Contact.jsx
// Lines ~15-18

const EMAILJS_SERVICE_ID = 'service_YOUR_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'template_YOUR_ID_HERE';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';
```

### 3. Test It! (1 minute)
- `npm run dev`
- Scroll to Contact section
- Fill form and submit
- Check your email!

---

## Content Customization

### Update Personal Info
**File**: `src/data/content.js` (Top of file)

```javascript
export const persona = {
  name: "Your Name",
  email: "your-email@example.com",
  phone: "+1-234-567-8900",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  // ... update all fields
};
```

### Add Projects
**File**: `src/data/content.js` (Find `export const projects`)

```javascript
{
  id: 1,
  title: "Project Title",
  description: "What it does",
  techStack: ["React", "Node.js"],
  repoLink: "https://github.com/...",
  demoLink: "https://demo.com", // optional
  features: ["Feature 1", "Feature 2"]
}
```

### Update Skills
**File**: `src/data/content.js` (Find `export const skills`)

```javascript
{
  category: "Category Name",
  items: ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Update Experience
**File**: `src/data/content.js` (Find `export const experience`)

```javascript
{
  id: 1,
  role: "Job Title",
  company: "Company Name",
  period: "Month Year - Present",
  description: ["Responsibility 1", "Responsibility 2"]
}
```

---

## Customization Guide

### Change Colors
**File**: `src/styles/variables.css` (Main section)

```css
:root {
  --accent-primary: #6366f1;      /* YOUR MAIN COLOR */
  --accent-secondary: #10b981;    /* YOUR SECONDARY COLOR */
  --accent-tertiary: #f59e0b;     /* YOUR ACCENT COLOR */
}
```

### Change Fonts
**File**: `src/styles/variables.css`

```css
--font-main: 'YourFont', sans-serif;
--font-serif: 'YourFont', serif;
```

### Adjust Glass Blur
**File**: `src/styles/variables.css`

```css
--glass-blur: 20px;  /* Increase for more blur */
```

### Adjust Animations Speed
**File**: `src/styles/variables.css`

```css
--transition-normal: 300ms;      /* 300ms transitions */
--transition-slow: 500ms;        /* Slower animations */
```

---

## Common Tasks

### Run Development Server
```bash
npm run dev
# Visit http://localhost:5173
```

### Build for Production
```bash
npm run build
# Creates optimized `dist/` folder
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
# Follows prompts, auto-deploys!
```

### Deploy to Netlify
1. Push to GitHub
2. Login to netlify.com
3. Connect repository
4. Build: `npm run build`, Publish: `dist`
5. Done!

---

## Design Features

### Glass Card (Frosted Glass Effect)
Used throughout the site. CSS class: `.glass-card`

### Animations
- **On scroll**: `.animate-fade-in-up`, `.animate-fade-in-right`, etc.
- **Delays**: `.delay-100`, `.delay-200`, `.delay-300`, etc.
- **Effects**: Float, scale, pulse

### Dark/Light Theme
- **Auto**: Detects system preference
- **Manual**: Footer toggle button
- **Storage**: Saved to browser

### Responsive
- Mobile: < 480px
- Tablet: 480px - 768px
- Laptop: 768px - 1024px
- Desktop: > 1024px

---

## Troubleshooting

### Email not sending?
1. Check credentials in Contact.jsx
2. Verify template has `{{variable}}`
3. Check browser console (F12)
4. EmailJS service active?

### Styles not updating?
1. Hard refresh: `Ctrl+Shift+R`
2. Rebuild: `npm run build`
3. Check imports in CSS

### Dark mode not working?
1. Open DevTools (F12)
2. Check `localStorage`
3. Clear and refresh

### Form not validating?
1. Check form field names
2. Verify email format
3. Check browser console

---

## File Locations Cheat Sheet

| What | File |
|------|------|
| **Your Content** | `src/data/content.js` |
| **Colors & Theme** | `src/styles/variables.css` |
| **Global Styles** | `src/styles/global.css` |
| **Contact Form** | `src/components/sections/Contact.jsx` |
| **Contact Styling** | `src/components/sections/Contact.css` |
| **Footer (Theme Toggle)** | `src/components/layout/Footer.jsx` |
| **Settings** | `package.json` |
| **Vite Config** | `vite.config.js` |

---

## Important Notes

1. **EmailJS is required** for contact form to work
2. **Public keys are safe** - they're meant to be public
3. **Always test locally** before deploying
4. **Keep backups** of your content
5. **Update regularly** - keep projects & experience current
6. **Check console** (F12) for any errors
7. **Test on mobile** - use DevTools

---

## Next Steps

1. ✅ Setup EmailJS credentials
2. ✅ Update `src/data/content.js` with your info
3. ✅ Test locally: `npm run dev`
4. ✅ Customize colors/fonts as desired
5. ✅ Test contact form
6. ✅ Build: `npm run build`
7. ✅ Deploy to Vercel/Netlify

---

## Support Resources

- **Setup Details**: Read [SETUP.md](./SETUP.md)
- **Full Docs**: Read [README.md](./README.md)
- **Code Comments**: Check component files
- **EmailJS Help**: https://www.emailjs.com/docs
- **React Help**: https://react.dev

---

**You got this! 🚀**
