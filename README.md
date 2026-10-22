# Portfolio — Varshini Jayavarapu

A clean, production-ready developer portfolio website built with **React and Vite**. Designed with a deep navy and near-black background, restrained lavender and violet accents, thoughtful typography, and smooth CSS animations.

---

## 🌟 Highlights

- **Identity**: Exact name order (**Varshini Jayavarapu**) and **VJ** header monogram logo.
- **Hero Screen**:
  - Smooth typing animation cycling through:
    - *Full Stack Developer*
    - *Data Science Enthusiast*
    - *AI & ML Explorer*
    - *Problem Solver*
  - Stylized illustrated vector developer with laptop and subtle orbital paths.
  - Four independently floating focus words: **BUILD**, **ANALYZE**, **CREATE**, **SOLVE**.
  - Scroll down indicator linking to the About section.
- **About**: Authentic, student-appropriate narrative highlighting B.Tech CSE background, practical software building, and data/AI exploration.
- **Skills**: Categorized toolkit (Programming, Web Development, Databases, Tools & Technologies, Additional Interests) presented in clean, scannable badges.
- **Featured Projects**:
  - **Handloom Web Application** (Team Lead, In Development)
  - **Global Loom Collective** (In Development)
- **Contact**: Direct channels (Email with 1-click copy, LinkedIn, GitHub) and a clean message composer.

---

## 📁 Project Structure

```text
c:/Portfolio/
├── index.html                   # HTML entry point with fonts & VJ favicon
├── package.json                 # React & Vite dependencies and scripts
├── vite.config.js               # Vite build configuration
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main page layout & modal handlers
│   ├── index.css                # Deep navy & lavender design system & keyframe animations
│   ├── config/
│   │   └── portfolioConfig.js   # Central configuration file for personal URLs and project links
│   └── components/
│       ├── Navbar.jsx           # Sticky nav with VJ logo, links & resume button
│       ├── Hero.jsx             # Hero section with role typing animation
│       ├── AnimatedDeveloper.jsx# Illustrated vector figure, orbits & focus tags
│       ├── About.jsx            # Editorial About section & quick profile facts
│       ├── Skills.jsx           # Categorized technical toolkit badges
│       ├── Projects.jsx         # Featured projects with preview wireframes
│       ├── Contact.jsx          # Direct contact channels & email composer
│       └── Footer.jsx           # Clean copyright & back-to-top scroll
└── public/
    └── resume.pdf               # (Add your real PDF here)
```

---

## 🛠️ Personalization Guide

All URLs, contact details, and project links are centralized in a single configuration file:
👉 **[`src/config/portfolioConfig.js`](file:///c:/Portfolio/src/config/portfolioConfig.js)**

### 1. Contact & Social Links
Open `src/config/portfolioConfig.js` and update:
```javascript
contact: {
  email: "your.real.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  resumeUrl: "/resume.pdf"
}
```

### 2. Resume File
1. Place your actual resume PDF in the `c:/Portfolio/public/` folder with the name `resume.pdf`.
2. In `portfolioConfig.js`, set `resumeUrl: "/resume.pdf"`.
The **Resume** button in the header will then immediately download or open your PDF!

### 3. Project Deployment & Repository Links
Under `projects` in `src/config/portfolioConfig.js`, set `liveUrl` and `githubUrl` when you deploy your code:
```javascript
{
  id: "handloom-app",
  title: "Handloom Web Application",
  liveUrl: "https://your-demo-url.com",    // Leave as "" until deployed
  githubUrl: "https://github.com/your-repo" // Leave as "" until published
}
```
If left empty `""`, the portfolio automatically shows a graceful **"Demo coming soon"** or **"Repo coming soon"** badge instead of a broken link.

---

## 🚀 Running the Project

The development server is currently running:
```powershell
npm run dev
```
Open your browser at: **[http://localhost:5173](http://localhost:5173)**

To build for production:
```powershell
npm run build
```
