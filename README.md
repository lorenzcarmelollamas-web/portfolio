# Lorenz Llamas Portfolio

A professional portfolio website built with Next.js showcasing collections and account operations experience.

## Features

- Modern, responsive design
- Professional gradient styling
- Smooth scrolling navigation
- Mobile-friendly layout
- Showcases experience, skills, and contact information

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lorenzcarmelollamas-web/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be deployed on:
- **GitHub Pages** - Free hosting for static sites
- **Vercel** - Optimized for Next.js
- **Netlify** - Drag and drop deployment
- **Any Node.js hosting** - Heroku, DigitalOcean, etc.

### Deploy to GitHub Pages

1. Update `next.config.js` if needed
2. Run: `npm run build`
3. The `out` directory contains your static site
4. Push to GitHub and enable GitHub Pages in repository settings

## Structure

```
portfolio/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── package.json
└── next.config.js
```

## Customization

- Edit component files in `components/` to modify content
- Update `globals.css` to change styling
- Modify `Contact.jsx` to add your actual email and LinkedIn

## License

MIT
