# Donghua Admin Dashboard

A modern, responsive e-commerce admin dashboard built with **Next.js 16**, **shadcn/ui**, and **Tailwind CSS**.

![Dashboard Preview](https://via.placeholder.com/1200x630/09090b/6366f1?text=Donghua+Admin+Dashboard)

## Features

- **Dashboard Overview** - Stats cards with revenue, orders, customers, and conversion metrics
- **Revenue Analytics** - Interactive charts (Area, Bar, Pie) with Recharts
- **Recent Orders** - Paginated table with status badges and dropdown actions
- **Collapsible Sidebar** - Smooth animation, desktop fixed + mobile sheet drawer
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Dark Theme** - Zinc-based dark palette throughout

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Fonts**: Geist (Next.js default)

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
cd donghua-admin
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
donghua-admin/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with AppShell
│   │   ├── page.tsx            # Dashboard page
│   │   ├── globals.css         # Global styles
│   │   ├── products/page.tsx  # Products page
│   │   ├── orders/page.tsx     # Orders page
│   │   ├── customers/page.tsx  # Customers page
│   │   ├── analytics/page.tsx  # Analytics page
│   │   └── settings/page.tsx   # Settings page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── sheet.tsx
│   │   │   └── ...
│   │   ├── AppShell.tsx        # Main layout wrapper
│   │   ├── Sidebar.tsx         # Collapsible navigation
│   │   ├── StatsCard.tsx       # Stats display cards
│   │   ├── RevenueChart.tsx    # Analytics charts
│   │   └── RecentOrders.tsx    # Orders table
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | Indigo | `#6366f1` |
| Secondary | Violet | `#8b5cf6` |
| Accent | Amber | `#f59e0b` |
| Background | Zinc 950 | `#09090b` |
| Surface | Zinc 900 | `#18181b` |
| Border | Zinc 800 | `#27272a` |

## Navigation

| Route | Page |
|-------|------|
| `/` | Dashboard overview with stats and charts |
| `/products` | Product inventory management |
| `/orders` | Order management |
| `/customers` | Customer list |
| `/analytics` | Analytics and reports |
| `/settings` | Settings page |

## License

MIT
