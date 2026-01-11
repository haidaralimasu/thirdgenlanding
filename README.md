# ThirdGen Landing Page

A next-generation Web3 security suite landing page built with Next.js 14, featuring industrial design and terminal aesthetics.

## Features

- **Industrial Design**: Deep dark mode with McLaren Orange accents
- **Smooth Animations**: Framer Motion for subtle, mechanical movements
- **Terminal Typing Effect**: Dynamic hero subtitle with typing animation
- **Glassmorphism Cards**: Modern UI with backdrop blur effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Analytics Integration**: Vercel Analytics with event tracking
- **Form Handling**: React Hook Form with server actions
- **CMS Ready**: Sanity.io schema included (optional)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Forms**: React Hook Form
- **Analytics**: Vercel Analytics
- **CMS**: Sanity.io (optional)
- **Fonts**: JetBrains Mono & Inter

## Getting Started

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Run the development server**:
   ```bash
   yarn dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
thirdgen-landing/
├── app/
│   ├── actions/          # Server actions
│   ├── layout.tsx        # Root layout with fonts
│   └── page.tsx          # Main landing page
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── EvolutionSection.tsx
│   │   ├── StackSection.tsx
│   │   └── WaitlistSection.tsx
│   └── Navigation.tsx
├── lib/
│   ├── content.ts        # Default content
│   ├── sanity.ts         # Sanity client (optional)
│   └── utils.ts          # Utility functions
└── sanity/
    └── schema/           # Sanity schemas
```

## Design System

### Colors

- **Background**: `#050505` (Almost black)
- **Background Dark**: `#0A0A0A`
- **Foreground**: `#EDEDED` (Off-white)
- **Secondary**: `#888888` (Industrial grey)
- **Accent**: `#FF8700` (McLaren Orange)

### Typography

- **Headers**: JetBrains Mono (monospace)
- **Body**: Inter (sans-serif)

### Components

All components are highly modular and mobile-responsive:

- **Navigation**: Sticky header with smooth scroll
- **Hero**: Large typography with typing effect
- **Evolution**: 3-column grid comparing security generations
- **Stack**: Product cards with glassmorphism
- **Waitlist**: Form with validation and toast notifications

## Sanity CMS Integration (Optional)

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Copy `.env.example` to `.env.local`
3. Add your Sanity project ID and dataset
4. Use the schema in `sanity/schema/landingPage.ts`

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## Analytics

Vercel Analytics is integrated and tracks:
- Page views
- Sign up events (waitlist submissions)

## License

All rights reserved © ThirdGen
