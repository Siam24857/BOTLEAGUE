# AI Shopping Assistant

A modern e-commerce frontend built with React, TypeScript， and Tailwind CSS.

## Features

- Responsive design with mobile-first approach
- Product grid with filtering and sorting
- Interactive product cards with hover effects
- Search functionality
- Shopping cart indicator
- Category filtering sidebar
- Price range and rating filters

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Main navigation header
│   ├── Sidebar.tsx      # Category and filter sidebar
│   ├── ProductGrid.tsx  # Product listing grid
│   └── ProductCard.tsx  # Individual product card
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Customization

### Colors

You can customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      dark: '#2D3436',
      light: '#F8F9FA',
    },
  },
}
```

### Products

Product data is defined in `src/components/ProductGrid.tsx`. You can modify the products array to add or update products.
