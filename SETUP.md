# Portfolio Setup Guide - Email Configuration & Customization

## 📧 EmailJS Configuration (Contact Form)

Your portfolio includes a fully functional contact form with email notifications. Follow these steps to enable it:

### Step 1: Create a Free EmailJS Account

1. Visit [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a **FREE account** (no credit card needed)
3. Verify your email address

### Step 2: Get Your Public API Key

1. Log in to your EmailJS account
2. Navigate to **Account > API Keys**
3. Copy your **Public Key** (it looks like: `xxxxxxxxxxxxxxxxxxxxxxxx`)

### Step 3: Create an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended - easiest setup)
   - Outlook
   - Yahoo
   - or your custom SMTP server
4. Follow the authentication steps

### Step 4: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Template Variables (IMPORTANT):**
```
Subject: {{subject}}
From: {{from_name}} ({{email}})

Message:
{{message}}
```

**Template Content Example:**
```
Hello,

You have received a new message from {{from_name}}:

Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Copy your **Template ID** (looks like: `template_xxxxxxxxxxxx`)
5. Note your **Service ID** (looks like: `service_xxxxxxxxxxxx`)

### Step 5: Update Your Portfolio Code

Open `src/components/sections/Contact.jsx` and replace these lines at the top:

```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxxxxx'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxxxxx'; // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxxxxxxxxxx'; // Replace with your Public Key
```

**Where to find each:**
- **Service ID**: EmailJS Dashboard > Email Services > (your service)
- **Template ID**: EmailJS Dashboard > Email Templates > (your template)
- **Public Key**: EmailJS Dashboard > Account > API Keys

### Step 6: Test Your Setup

1. Run your portfolio: `npm run dev`
2. Navigate to the **Contact** section
3. Fill out the form and submit
4. You should receive an email within seconds

---

## 🎨 Customization Guide

### Change Your Personal Information

Edit `src/data/content.js`:

```javascript
export const persona = {
  name: "Your Name", // Your name
  role: "Your Title | Another Title", // Your professional title
  location: "Your City, Country", // Your location
  availability: "Open to opportunities", // Your availability
  email: "your-email@example.com", // Your email
  phone: "+1-234-567-8900", // Your phone
  linkedin: "https://linkedin.com/in/your-profile", // Your LinkedIn
  github: "https://github.com/your-username", // Your GitHub
  heroHeadline: "Your main headline", // Hero section headline
  heroSubheadline: "Your subtitle/tagline", // Hero section subtitle
  // ... rest of the content
};
```

### Update Your Projects

In `src/data/content.js`, edit the `projects` array:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of what the project does",
    techStack: ["React", "Node.js", "MongoDB"], // Technologies used
    repoLink: "https://github.com/your-repo", // GitHub link
    demoLink: "https://your-demo.com", // Live demo link (optional)
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ]
  },
  // Add more projects...
];
```

### Update Your Experience

Edit the `experience` array in `src/data/content.js`:

```javascript
export const experience = [
  {
    id: 1,
    role: "Job Title",
    company: "Company Name",
    period: "Month Year - Present", // or "Month Year - Month Year"
    description: [
      "Key responsibility 1",
      "Key responsibility 2",
      "Achievement or impact 3"
    ]
  },
  // Add more experiences...
];
```

### Update Your Skills

Edit the `skills` array:

```javascript
export const skills = [
  {
    category: "Languages & Backend",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  },
  {
    category: "Tools & Databases",
    items: ["Tool 1", "Tool 2", "Tool 3"]
  },
  // Add more skill categories...
];
```

### Update Your Education

Edit the `education` array:

```javascript
export const education = [
  {
    degree: "Degree Name",
    institution: "University/College Name",
    year: "2024 - 2025"
  },
  {
    degree: "Certifications",
    items: [
      "Certification 1",
      "Certification 2"
    ]
  },
  // Add more education...
];
```

---

## 🎭 Theme & Color System

### Dark/Light Mode

- **Automatic**: Detects system preference on first load
- **Manual**: Click the theme toggle button in the footer
- **Persistent**: Your theme choice is saved in browser storage

### Colors

Edit `src/styles/variables.css` to customize colors:

```css
:root {
  --accent-primary: #6366f1;      /* Main brand color */
  --accent-secondary: #10b981;    /* Secondary color */
  --accent-tertiary: #f59e0b;     /* Tertiary color */
  --accent-danger: #ef4444;       /* Error/danger color */
  
  /* ...more variables */
}
```

### Glassmorphism Effect

Adjust the blur amount in `variables.css`:

```css
--glass-blur: 20px; /* Increase for more blur, decrease for less */
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click **Import Project**
4. Select your portfolio repository
5. Deploy (it's automatic!)

Your site will be live at: `yourusername.vercel.app`

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click **New site from Git**
4. Connect your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Environment Variables (Important for Email)

If deploying, make sure your EmailJS credentials are:
1. Already in your code (they're safely public keys)
2. Or add to deployment platform's environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

---

## 📱 Responsive Design

The portfolio automatically adapts to:
- **Desktop** (1920px and above)
- **Laptop** (1024px - 1919px)
- **Tablet** (768px - 1023px)
- **Mobile** (480px - 767px)
- **Small Mobile** (below 480px)

All components use modern CSS Grid and Flexbox for responsive layouts.

---

## ✨ Modern Features Implemented

### 1. **Glassmorphism**
- Frosted glass effect cards
- Backdrop blur with transparency
- Smooth hover transitions

### 2. **Animations**
- Scroll-triggered fade-in animations
- Button hover effects with shine
- Smooth transitions throughout

### 3. **Micro-interactions**
- Form input focus states
- Button press feedback
- Hover scale effects on cards
- Loading spinner on form submit

### 4. **Accessibility**
- Semantic HTML structure
- ARIA labels for icons
- Keyboard navigation support
- Reduced motion support
- Proper color contrast

### 5. **Performance**
- Optimized CSS with variables
- Smooth animations (60fps)
- Lazy loading ready
- Minimal JavaScript dependencies

---

## 🔧 Installation & Running

### First Time Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at: `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 File Structure

```
src/
├── components/
│   ├── layout/           # Navigation, Footer, etc.
│   └── sections/         # Hero, About, Contact, etc.
├── data/
│   └── content.js        # All your portfolio content (EDIT THIS)
├── styles/
│   ├── global.css        # Global styles & animations
│   ├── variables.css     # CSS variables & theme
│   └── App.css          # App container styles
└── App.jsx              # Main component

```

---

## 🆘 Troubleshooting

### Email not sending?
1. Check that EmailJS credentials are correct
2. Verify email template variable names match
3. Check browser console for error messages
4. Ensure service ID and template ID are from same EmailJS account

### Dark mode not working?
1. Clear browser cache
2. Check `localStorage` in DevTools
3. Verify `data-theme` attribute on `<html>`

### Form validation failing?
1. Check browser console for error messages
2. Ensure all required fields have correct `name` attributes
3. Verify email format is correct

### Styles not loading?
1. Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
2. Clear build: `npm run build`
3. Check imports in CSS files

---

## 📚 Additional Resources

- **React Documentation**: https://react.dev
- **EmailJS Docs**: https://www.emailjs.com/docs
- **CSS Animations**: https://animista.net/
- **Color Picker**: https://coolors.co/
- **Font Library**: https://fonts.google.com/

---

## 💬 Need Help?

- Check the inline comments in code files
- Review EmailJS dashboard debugging
- Check browser Developer Tools (F12) console
- Refer to specific component CSS files for styling

**Happy coding!** 🚀
