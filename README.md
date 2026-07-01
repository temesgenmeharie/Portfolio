<h1 align="center">
  <br />
  🚀 Temesgen Meharie — Personal Portfolio
  <br />
</h1>

<p align="center">
  A modern, responsive full-stack developer portfolio built with React + Vite, featuring dark/light theme, smooth animations, and a clean professional design.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer%20Motion-latest-EF4B82?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

---

## 📋 Table of Contents

- [About](#-about)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Contact](#-contact)
- [License](#-license)

---

## 📖 About

This is my personal portfolio website showcasing my work as a **Full Stack Developer** and **Flutter Developer**. It is designed to be fast, accessible, and visually striking — presenting my projects, technical skills, and contact information in a clean, modern interface.

---

## 🌐 Live Demo

> 🔗 Coming soon — deploy link will be added here once hosted.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark / Light Theme** | Persistent theme toggle with full contrast support |
| 💻 **Responsive Design** | Optimized for mobile, tablet, and desktop |
| 🎞️ **Smooth Animations** | Powered by Framer Motion with scroll-triggered effects |
| ⌨️ **Typing Effect** | Animated role title in the Hero section |
| 🧩 **Modular Components** | Clean, reusable React components |
| 📬 **Contact Form** | Ready-to-wire contact form with social links |
| 🔗 **Social Links** | GitHub, LinkedIn, and Telegram integrated |
| ⚡ **Fast Build** | Vite-powered with HMR for rapid development |

---

## 🛠 Tech Stack

### Frontend
- **React 18** — UI component library
- **Vite 5** — Lightning-fast build tool
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Declarative animations
- **React Icons** — Icon library (Fi, Si sets)

### Developer Tools
- **ESLint** — Code linting
- **PostCSS** — CSS processing
- **Git & GitHub** — Version control

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/temesgenmeharie/Portfolio.git

# 2. Navigate into the project directory
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Visit **http://localhost:5173** in your browser to see the portfolio.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, and the project also includes Vercel API routes in `api/` for the contact form.

### Contact Form Setup

Create a `.env` file from `.env.example` and set:

```bash
EMAIL_API_KEY=your_resend_api_key
CONTACT_RECEIVER_EMAIL=your_email@example.com
```

Optional:

```bash
VITE_API_BASE_URL=
```

Leave `VITE_API_BASE_URL` empty when deploying the frontend and API together on Vercel.

### Vercel Deployment

This project is Vercel-ready:

- Frontend: built from the Vite app in the project root
- Backend: served by Vercel functions in `api/contact.js` and `api/health.js`

On Vercel, add these environment variables to the project:

- `EMAIL_API_KEY`
- `CONTACT_RECEIVER_EMAIL`

Then deploy the repository root as a single Vercel project.

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── profile-placeholder.png   # Replace with your profile photo
│   ├── resume.pdf                # Replace with your actual CV
│   └── developer-bg.png          # Hero background image
│
├── api/
│   ├── contact.js                # Vercel contact form function
│   └── health.js                 # Vercel health check
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation with theme toggle
│   │   ├── Hero.jsx              # Landing section with typing effect
│   │   ├── About.jsx             # About me section
│   │   ├── Skills.jsx            # Technical & soft skills tabs
│   │   ├── projects.jsx          # Project showcase cards
│   │   ├── Contact.jsx           # Contact form & social links
│   │   └── Footer.jsx            # Footer
│   ├── data/
│   │   └── projects.js           # Project data
│   ├── index.css                 # Global styles & CSS variables
│   └── main.jsx                  # App entry point
│
├── .env.example
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Customization

### 1. Personal Information
Update your name, bio, and role titles in:
- `src/components/Hero.jsx` — name, typing words, description
- `src/components/About.jsx` — about me paragraph

### 2. Profile Photo & Resume
Replace the placeholder files in `public/`:
```bash
public/profile-placeholder.png  →  your photo
public/resume.pdf               →  your CV
```

### 3. Projects
Edit the projects array in `src/data/projects.js` or directly in `src/components/projects.jsx`.

### 4. Social Links
Update social URLs in `src/components/Contact.jsx`:
```jsx
GitHub:   https://github.com/temesgenmeharie
LinkedIn: your LinkedIn URL
Telegram: https://t.me/Ethiopia2063
```

### 5. Theme Colors
Modify CSS variables in `src/index.css` under `:root` (light) and `.dark` (dark) selectors.

---

## 📬 Contact

**Temesgen Meharie**

| Platform | Link |
|---|---|
| 📧 Email | temesgenmeharie71@gmail.com |
| 💼 LinkedIn | [linkedin.com/in/temesgenmeharie](#) |
| 🐙 GitHub | [github.com/temesgenmeharie](https://github.com/temesgenmeharie) |
| ✈️ Telegram | [@Ethiopia2063](https://t.me/Ethiopia2063) |

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute this project with attribution.

---

<p align="center">
  Made with ❤️ by <strong>Temesgen Meharie</strong>
</p>
