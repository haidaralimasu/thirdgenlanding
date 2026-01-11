# Quick Start Guide

## Get Up and Running in 2 Minutes

### 1. Start Development Server
```bash
cd thirdgen-landing
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Customize Content
Edit `lib/content.ts`:
```typescript
export const defaultContent = {
  heroTitle: "Your Title Here",
  heroSubtitle: "Your subtitle...",
  feature1Title: "[ YOUR ] Feature 1",
  feature2Title: "[ YOUR ] Feature 2",
  feature3Title: "[ YOUR ] Feature 3",
};
```

### 3. Test the Waitlist Form
1. Scroll to the bottom
2. Enter an email
3. Click "Request Access"
4. See the toast: "Welcome to the resistance."

### 4. Deploy to Vercel
```bash
vercel
```

## Key Files to Edit

| File | Purpose |
|------|---------|
| `lib/content.ts` | All page copy/text |
| `components/sections/*.tsx` | Modify section layouts |
| `tailwind.config.ts` | Change colors/theme |
| `app/layout.tsx` | Update metadata/SEO |
| `app/actions/waitlist.ts` | Add real database logic |

## Folder Structure at a Glance
```
thirdgen-landing/
├── app/              → Pages & server actions
├── components/       → UI components & sections
├── lib/              → Content & utilities
└── tailwind.config.ts → Design system
```

## Common Tasks

### Change Primary Accent Color
`tailwind.config.ts` → Line 20:
```typescript
accent: {
  DEFAULT: "#FF8700", // Change this
},
```

### Add a New Section
1. Create `components/sections/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add between existing sections

### Connect Real Database for Waitlist
Edit `app/actions/waitlist.ts`:
```typescript
export async function submitToWaitlist(email: string) {
  // Replace with your database logic
  await db.waitlist.create({ data: { email } });
  return { success: true, message: "Welcome!" };
}
```

### Update SEO/Metadata
Edit `app/layout.tsx` → Line 18-21

## Build for Production
```bash
yarn build
yarn start
```

## Need Help?
- Check `README.md` for full documentation
- Review `IMPLEMENTATION.md` for technical details

---

**Time to launch: ~2 minutes** ⚡
