# Matteo Pietro Dazzi — Staff Software Developer Portfolio

A modern, dark-themed personal portfolio built with [Astro](https://astro.build) and React.

## Tech Stack

- **Framework**: Astro 6 with React integration
- **Styling**: Tailwind CSS 4
- **Icons**: Font Awesome
- **Fonts**: Playfair Display (headings) + Space Mono (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── sections/      # Page sections (AboutMe, Projects, Contacts, etc.)
│   ├── NavBar.tsx
│   ├── TypeWriter.tsx
│   └── GitHubProjectCard.tsx
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Features

- Dark editorial aesthetic with light blue accents
- Responsive design for all screen sizes
- GitHub projects fetched via API with infinite scroll
- Smooth scroll navigation
- Custom typewriter animation
- Animated page sections on scroll

## License

MIT
