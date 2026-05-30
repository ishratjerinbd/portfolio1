# 💻 Professional Developer Portfolio

A responsive, high-performance, and visually polished developer portfolio application built using modern web standards. Crafted with a clean, high-contrast display designed to act as a central hub for sharing professional highlights, projects, and personal insights.

---

## ✨ Key Features

- **💡 Multi-theme Support:** Dynamic, manual toggle between Light and Dark mode using custom native properties in CSS first Tailwind CSS v4.
- **🎨 Modern Animations:** Silky-smooth entry transitions, hover interactions, filter animations, and layout morphs constructed with `motion`.
- **📂 Project Showcase:** Clean grid organization with real-time category filtering (Frontend, Backend, Full-stack, Mobile) to showcase individual contributions cleanly.
- **📄 Interactive Timeline:** Comprehensive educational and professional journey logging to tell the candidate's career story clearly and compactly.
- **✍️ Interactive Tech Blog:** Native-feeling interactive tech articles section styled with refined typography and layout structures.
- **🖨️ Print-Ready Resume:** A print-optimized, dedicated layout stylesheet designed to export credentials directly into standard physical or PDF formats.
- **✉️ Seamless Contact Section:** Multi-channel connect option (Email, Github, LinkedIn) with fully integrated user experience hooks.

---

## 🛠️ Technology Stack

This application is engineered on top of clean, modular code practices and leverages premium production components:

- **Framework:** [React 19](https://react.dev/) using modern functional structures, hooks, and clean strict typing.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for compilation-level type checking and documentation.
- **Styles:** [Tailwind CSS v4](https://tailwindcss.com/) - Leveraging the brand-new, ultra-fast CSS-first compilation engine and native CSS variables for automated properties.
- **Animations:** [Motion](https://motion.dev/) (previously Framer Motion) for fluid UI transitions and gesture controls.
- **Icons:** [Lucide React](https://lucide.dev/) for a versatile set of clean modern vector indicators.
- **Bundler:** [Vite](https://vite.dev/) for instantaneous HMR, optimized builds, and minimal packaging footprints.

---

## 🚀 Getting Started

Follow these instructions to set up, run, and compile the portfolio on your local machine.

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and `npm` installed.

### ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd developer-portfolio
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to inspect the local server.

4. **Verify types and code formatting:**
   ```bash
   npm run lint
   ```

### 📦 Production Build

To bundle your application into highly optimized, minified static files targeting deployment engines:

```bash
npm run build
```

The compiled output will be exported into the root `/dist` directory. This static structure can be directly hosted on netlify, vercel, Cloud Run, or any typical static file servers.

---

## 📁 Repository Anatomy

Below is the directory architecture for the modular structures inside this project:

```text
├── index.html            # Primary index file served in-browser
├── package.json          # Main Node configuration, scripts, and dependencies
├── tailwind.config.ts    # Custom responsive boundaries and animations
├── tsconfig.json         # Strict TypeScript compiler options
├── src/
│   ├── main.tsx          # Main entry initialization logic
│   ├── App.tsx           # Primary application view core & state hub
│   ├── index.css         # Global stylesheets, custom fonts, tailwind directive files
│   ├── types.ts          # Declarations of typescript boundaries and model variables
│   ├── data.ts           # Storage schema template for direct text assets, blogs, blogs indices
│   └── components/       # Reusable, standalone structural components
│       ├── Header.tsx     # Branding, accessibility menu, and dark/light dynamic toggles
│       ├── Hero.tsx       # Welcoming view layout, resume button, direct hooks
│       ├── Projects.tsx   # Interactive tabs filters showcasing projects
│       ├── Experience.tsx # Styled chronological interactive timeline blocks
│       ├── Blog.tsx       # Elegant interactive article preview section
│       ├── Contact.tsx    # Accessible response forms and links
│       └── PrintResume.tsx# Special view styled with unique printing classes
```

---

## 📖 License

Feel free to use it