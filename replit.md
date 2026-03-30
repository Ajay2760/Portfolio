# Portfolio Website - Ajay R

## Overview
A personal portfolio website for Ajay R, built as a full-stack Express + React application with Vite. Features sections for Home, About, Education, Experience, Projects, Paper Publications, Skills, and a Contact form.

## Architecture

- **Frontend**: React 18 + TypeScript, Vite dev server (middleware mode), TailwindCSS, Radix UI components, shadcn/ui
- **Backend**: Express.js (Node.js), serves both API routes and the frontend
- **Storage**: In-memory storage (MemStorage) - no external database required
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS + Radix UI + shadcn/ui component library

## Project Structure

```
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── App.tsx
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/          # Express backend
│   ├── index.ts     # Entry point, listens on port 5000
│   ├── routes.ts    # API routes (/api/contact, /api/contacts)
│   ├── storage.ts   # In-memory storage implementation
│   └── vite.ts      # Vite middleware setup
├── shared/          # Shared types/schema
│   └── schema.ts    # Drizzle schema (users, contacts tables)
├── public/          # Static assets
├── vite.config.ts   # Vite configuration
├── drizzle.config.ts # Drizzle ORM config (PostgreSQL, optional)
└── package.json
```

## Development

- **Dev command**: `npm run dev` - Starts Express server with Vite middleware on port 5000
- **Build command**: `npm run build` - Builds frontend with Vite + bundles server with esbuild
- **Production**: `npm start` - Runs compiled `dist/index.js`

## Key Features

- Portfolio sections: Home, About, Education, Experience, Projects, Paper Publications, Skills
- Dark/light mode toggle
- Contact form with backend API (`POST /api/contact`)
- Responsive design

## Ports

- **5000**: Main application (Express serves both API and frontend)

## Deployment

- Target: autoscale
- Build: `npm run build`
- Run: `node dist/index.js`
