# HarmoniaVitalis 🌿

> A modern, responsive website for an online therapy practice — built with React, Vite, and Tailwind CSS.

**Live Demo:** [mitiako.github.io/My-therapy-project](https://mitiako.github.io/My-therapy-project/)

---

## 📋 About the Project

HarmoniaVitalis is a professional website for a licensed Marriage and Family Therapist (LMFT) based in Texas. The site provides information about therapy services, allows clients to book sessions, and offers a seamless user experience across all devices.

This project was built as a diploma project for the **GoIT Fullstack Developer** course.

---

## ✨ Features

- 🌙 **Dark / Light Mode** — smooth theme toggle with system preference detection and localStorage persistence
- 🎥 **Video Backgrounds** — autoplay video in the About section; hover-to-play videos on service cards
- 🎠 **Responsive Carousel** — testimonials carousel with 1/2/3 cards per view depending on screen size
- 📅 **Booking Modal** — service-specific booking form triggered from each service card
- 📱 **Fully Responsive** — optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** — scroll-reveal animations using IntersectionObserver
- 🎨 **Custom Design System** — CSS variables for consistent theming across light and dark modes

---

## 🛠️ Tech Stack

| Technology         | Purpose                              |
| ------------------ | ------------------------------------ |
| **React 18**       | UI components and state management   |
| **Vite 5**         | Build tool and dev server            |
| **Tailwind CSS 3** | Utility-first styling                |
| **CSS Variables**  | Dynamic theming (light/dark mode)    |
| **GitHub Pages**   | Hosting and deployment               |
| **gh-pages**       | Automated deployment to GitHub Pages |

---

## 📁 Project Structure

```
HarmoniaVitalis/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/          # Optimized WebP images
│   │   └── video/           # Optimized MP4 videos
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation with theme toggle
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section with video
│   │   ├── Services.jsx      # Service cards with hover video
│   │   ├── BookingBand.jsx   # CTA booking band
│   │   ├── Testimonials.jsx  # Responsive carousel
│   │   ├── FAQ.jsx           # Accordion FAQ
│   │   ├── Booking.jsx       # Full booking form section
│   │   ├── Contact.jsx       # Contact form section
│   │   ├── Modal.jsx         # Booking modal
│   │   ├── Toast.jsx         # Toast notifications
│   │   └── Footer.jsx        # Footer
│   ├── data/
│   │   └── index.js          # Static data (services, testimonials, FAQs)
│   ├── hooks/
│   │   ├── useModal.js       # Modal state management
│   │   ├── useTheme.js       # Theme management with system sync
│   │   └── useToast.js       # Toast notifications
│   ├── styles/
│   │   └── global.css        # Global styles and CSS variables
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Mitiako/My-therapy-project.git

# Navigate to project directory
cd My-therapy-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) in your browser.

### Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 🎨 Design

The design is inspired by a calm, therapeutic aesthetic with:

- **Color Palette:** Sage green, warm beige, deep forest green, terracotta
- **Typography:** Poppins (headings) + Nunito Sans (body)
- **Dark Mode:** Deep forest tones — warm and calming, not harsh

---

## 📄 License

Copyright © 2026 Vitalina Tarasenko. All Rights Reserved.

See [LICENSE](https://github.com/Mitiako/My-therapy-project/blob/main/LICENSE) for details.

---

## 👨‍💻 Author

**Dmytro Kovalenko** — Junior Frontend Developer

- 🔗 LinkedIn: linkedin.com/in/dmytro-kovalenko-dev
- 💻 GitHub: github.com/Mitiako
