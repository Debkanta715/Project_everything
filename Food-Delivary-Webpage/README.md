# Food Delivery Webpage

A modern, responsive food delivery landing page built with React 19, Vite, and Tailwind CSS. Featuring a sleek hero section, dynamic navbar, and showcase of delivery features.

## 🎯 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Built with Tailwind CSS for a polished appearance
- **Hero Section** - Eye-catching landing hero with call-to-action
- **Feature Showcase** - Display key features and benefits
- **Dynamic Navigation** - Responsive navbar with mobile menu support
- **Icon Library** - Lucide React icons for visual appeal
- **Smooth Routing** - Client-side navigation with React Router
- **Code Quality** - ESLint configured for code consistency

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | ^19.2.0 | UI library |
| Vite | ^7.3.1 | Build tool & dev server |
| Tailwind CSS | ^4.2.2 | Utility-first CSS framework |
| React Router | ^7.13.1 | Client-side routing |
| Lucide React | ^0.577.0 | Icon library |
| ESLint | ^9.39.1 | Code linting |

## 📁 Project Structure

```
Food-Delivary-Webpage/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── FeatureSection.jsx  # Features showcase
│   ├── assets/
│   │   └── profile-pictures/   # User profile images
│   ├── constants/
│   │   └── index.jsx           # App constants
│   └── App.jsx                 # Root component
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint rules
├── tailwind.config.js          # Tailwind configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd Food-Delivary-Webpage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

## 📱 Component Overview

### Navbar Component
- Responsive navigation bar
- Mobile-friendly hamburger menu
- Links to main sections
- Professional branding

### Hero Section
- Eye-catching header
- Call-to-action buttons
- Hero images/graphics
- Compelling copy

### Feature Section
- Showcase key benefits
- Feature cards with icons
- Responsive grid layout
- Easy to customize

## 🎨 Styling

### Tailwind CSS Configuration
- Customized color palette
- Responsive breakpoints (mobile-first)
- Extended spacing utilities
- Custom component classes

### Global Styles
Main styles are defined in `src/index.css`:
- Base styles
- Component-specific styles
- Responsive utilities
- Animation definitions

## 📦 Dependencies

### Core Dependencies
- **React** - UI framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon system

### Dev Dependencies
- **Vite** - Build tool
- **@vitejs/plugin-react** - React support in Vite
- **Tailwind CSS** - Styling framework
- **@tailwindcss/vite** - Tailwind Vite plugin
- **ESLint** - Code quality tool
- **@eslint/js** - JavaScript rules
- **eslint-plugin-react-hooks** - React hooks linting

## 🔍 Code Quality

### ESLint Rules
Configured with:
- React best practices
- React hooks rules
- Modern JavaScript standards
- ESLint recommended config

Run linting:
```bash
npm run lint
```

Fix lint issues automatically:
```bash
npm run lint -- --fix
```

## 🚀 Production Build

Build for production:
```bash
npm run build
```

This creates an optimized build in the `dist/` directory with:
- Minified JavaScript
- Optimized CSS
- Asset optimization
- Source maps

Preview production build:
```bash
npm run preview
```

## 📱 Responsive Breakpoints

Built with Tailwind's responsive utilities:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎯 Performance Optimization

- **Code splitting** - Vite automatically splits code
- **Lazy loading** - Components loaded on demand
- **Image optimization** - Static asset optimization
- **CSS purging** - Unused styles removed in production

## 🔐 Security Best Practices

- No hardcoded sensitive data
- XSS protection via React's JSX
- Content Security Policy ready
- Safe dependency versions

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Change port in `vite.config.js` |
| Module not found | Run `npm install` to ensure all deps installed |
| Styling not applied | Check Tailwind config and CSS imports |
| ESLint errors | Run `npm run lint -- --fix` to auto-fix |
| Build fails | Clear `node_modules` and `.vite`, then reinstall |

## 📝 Notes

- Uses React Router for potential multi-page routing
- Profile pictures can be added to `src/assets/profile-pictures/`
- Constants are centralized in `src/constants/`
- All components are functional components with hooks

## 🎨 Customization Tips

### Change Colors
Edit Tailwind config in `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color'
}
```

### Add New Routes
Update routing in `App.jsx`:
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
```

### Update Content
Edit components in `src/components/`:
- Modify text in JSX
- Update images in asset imports
- Change styling classes

## 🤝 Contributing

Contributions welcome! Please:
- Run `npm run lint` before committing
- Follow React best practices
- Use semantic HTML
- Keep components modular

## 📄 License

ISC

## 🔗 Deployment

Ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Just upload the `dist/` folder after running `npm run build`

---

**Created with ❤️ for food lovers everywhere** 🍕🍔🍜
