# Esse Elite Groups - Website

Project structured with Feature-Sliced Design architecture, fully set up with ESLint, Prettier, and Husky for code quality.

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Next.js 15** - Latest Next.js version
- **React 19** - Latest React version
- **TypeScript** - Type safety
- **Feature-Sliced Design** - Architecture methodology
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky & lint-staged** - Pre-commit hooks for code quality
- **TailwindCSS** - Utility-first CSS framework
- **React Query** - Data fetching and state management

## Project Structure

The project follows the Feature-Sliced Design methodology:

- `app` - Application layer (pages, layouts)
- `widgets` - Composite UI blocks
- `features` - User interactions, actions
- `entities` - Business entities
- `shared` - Reusable functionality, UI, types

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
