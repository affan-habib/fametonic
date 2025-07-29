# Fametonic Landing Page

A modern, responsive landing page for Fametonic - helping aspiring influencers turn social media into a profitable career.

## 🌐 Live Demo & Repository

- **🚀 Live Site**: [https://fametonic-tau.vercel.app/](https://fametonic-tau.vercel.app/)
- **📂 GitHub Repository**: [https://github.com/affan-habib/fametonic](https://github.com/affan-habib/fametonic)

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern UI/UX**: Clean, professional design with gradient backgrounds and smooth transitions
- **Interactive Elements**: Mobile hamburger menu with enhanced touch areas
- **Optimized Performance**: Custom fonts, optimized images, and efficient asset management
- **SEO Ready**: Proper metadata, semantic HTML, and search engine optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Urbanist, Figtree)
- **Icons**: Custom SVG assets
- **Deployment**: Vercel-ready

## 📱 Responsive Features

### Mobile Optimizations
- Touch-friendly hamburger menu with 44px minimum touch targets
- Responsive image sizing with viewport constraints
- Optimized text line breaks for mobile readability
- Centered content layout with proper spacing
- Horizontal scroll prevention

### Desktop Experience
- Full navigation menu with hover effects
- Larger typography and spacing
- Side-positioned app mockup image
- Professional layout with optimal content hierarchy

## 🎨 Design Highlights

- **Color Scheme**: Dark theme with cyan (#00E7F9) and pink (#FC004E) accents
- **Typography**: Urbanist for headings, Figtree for body text
- **Gradients**: Custom linear gradients for CTAs and promotional banners
- **Shadows**: Subtle text shadows and button shadows for depth
- **Animations**: Smooth hover transitions and interactive states

## 📁 Project Structure

```
├── public/
│   ├── fametonic-logo.png
│   ├── mobile-app-mockup.png
│   ├── hamburger-menu.svg
│   └── arrow-right.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── data/
│       └── pageData.tsx
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fametonic-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Data Management
All content is centralized in `src/data/pageData.tsx` for easy maintenance and updates.

### Responsive Navigation
- Desktop: Horizontal menu with "About us" and "Contact" links
- Mobile: Hamburger menu with dropdown functionality

### Hero Section
- Compelling headlines with responsive line breaks
- Feature list with emoji bullets
- Prominent CTA button with arrow icon

### Mobile Menu
- Touch-optimized with enhanced tap areas
- Smooth dropdown animation
- Right-aligned menu items with chevron icons

## 🔧 Customization

### Content Updates
Edit `src/data/pageData.tsx` to update:
- Headlines and copy
- Feature list items
- Navigation menu items
- Images and alt text

### Styling
- Modify `tailwind.config.js` for design system changes
- Update `src/app/globals.css` for global styles
- Adjust responsive breakpoints in component classes

### Assets
Replace images in the `public/` folder:
- Logo: `fametonic-logo.png`
- App mockup: `mobile-app-mockup.png`
- Icons: SVG files for scalable graphics

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Deploy to Vercel with automatic optimizations.

### Other Platforms
The project builds to static files and can be deployed to any hosting platform that supports Node.js applications.

## 📄 License

This project is open source and available under the MIT License.


**Built with ❤️ for Fametonic**