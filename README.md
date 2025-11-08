# 🍱 Katameal - Meal Delivery Website

A modern, bilingual (English/Spanish) website for Katameal, a tech-driven meal delivery service for construction and industrial workers.

## 🎨 Design System

### Brand Colors
- **Primary**: Deep Purple `#6A1B9A`
- **Secondary**: Bright Orange `#F57C00`
- **Background**: Dark Gray `#121212`
- **Text**: Light Gray `#E0E0E0` / White `#FFFFFF`

### Typography
- **Font**: Poppins (300, 400, 500, 600, 700, 800)
- **Style**: Bold, clean, geometric

### Design Style
- Futuristic but warm
- Mobile-first responsive design
- Rounded corners with soft shadows
- Clean spacing and minimal layout

## 🚀 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Internationalization**: next-intl (English & Spanish)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **SEO**: Next.js Metadata API + Structured Data

## 📁 Project Structure

```
katameal-site/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── layout.tsx     # Root layout with SEO
│   │   │   └── page.tsx       # Home page
│   │   └── globals.css        # Global styles & Tailwind config
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── Navigation.tsx     # Header with language switcher
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Features.tsx       # Features showcase
│   │   ├── HowItWorks.tsx     # Process explanation
│   │   ├── Pricing.tsx        # Subscription plans
│   │   ├── ContactForm.tsx    # Lead capture form
│   │   ├── Footer.tsx         # Footer with links
│   │   └── StructuredData.tsx # JSON-LD for SEO
│   ├── i18n/
│   │   ├── request.ts         # i18n configuration
│   │   └── routing.ts         # Routing configuration
│   ├── lib/
│   │   ├── seo.ts            # SEO configuration
│   │   └── utils.ts          # Utility functions
│   └── middleware.ts          # i18n middleware
├── messages/
│   ├── en.json               # English translations
│   └── es.json               # Spanish translations
└── public/                   # Static assets

```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd katameal-site
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

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Internationalization

The website supports English and Spanish:
- **English**: Default language (`/` or `/en`)
- **Spanish**: Available at `/es`

Users can switch languages using the globe icon in the navigation bar.

### Adding Translations

Edit the translation files:
- `messages/en.json` - English translations
- `messages/es.json` - Spanish translations

## 🎯 Features

### ✅ Implemented Features

1. **Responsive Navigation**
   - Mobile-friendly hamburger menu
   - Language switcher (EN/ES)
   - Smooth scroll to sections

2. **Hero Section**
   - Eye-catching headline with gradient text
   - Animated background elements
   - Clear CTAs (Call-to-Actions)

3. **Features Section**
   - 6 key benefits with icons
   - Hover animations
   - Grid layout (responsive)

4. **How It Works**
   - 3-step process visualization
   - Numbered badges with icons
   - Clean timeline design

5. **Pricing Plans**
   - Weekly and Monthly options
   - "Most Popular" badge
   - Feature comparison
   - Discount highlighting

6. **Contact Form**
   - Form validation with Zod
   - Error messages
   - Success state
   - Required and optional fields

7. **Footer**
   - Quick links
   - Social media icons
   - Contact information
   - Legal links

8. **SEO Optimization**
   - Meta tags (Open Graph, Twitter)
   - Structured data (JSON-LD)
   - Sitemap-ready
   - Mobile-friendly

9. **Animations**
   - Framer Motion throughout
   - Scroll-triggered animations
   - Hover effects
   - Smooth transitions

## 🎨 Customization

### Colors

Edit colors in `src/app/globals.css`:

```css
:root {
  --primary: #6A1B9A;
  --secondary: #F57C00;
  --background: #121212;
  /* ... */
}
```

### Content

Update translations in:
- `messages/en.json`
- `messages/es.json`

### Components

All components are in `src/components/` and use a modular structure for easy customization.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Form Validation

The contact form validates:
- Name (min 2 characters)
- Email (valid email format)
- Phone (min 10 characters)
- Job site location (required)
- Message (min 10 characters, optional)

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static site:
```bash
npm run build
```

The output will be in the `.next` folder, ready to deploy to any hosting platform.

## 📝 Environment Variables

Currently, no environment variables are required. When implementing the contact form backend, add:

```env
NEXT_PUBLIC_API_URL=your-api-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📧 Contact

For questions or support:
- Email: hello@katameal.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the Katameal team
