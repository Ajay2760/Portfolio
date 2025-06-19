# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built for Ajay R, featuring a React frontend with a Node.js/Express backend. The application showcases personal information, education, experience, projects, skills, certifications, and includes a functional contact form. The architecture follows a clean separation between client and server with shared schema definitions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL
- **Validation**: Zod schemas for type-safe data validation
- **Development**: tsx for TypeScript execution in development

### Data Storage Solutions
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized in `shared/schema.ts` with Zod validation
- **Tables**: Users and contacts with proper relationships and constraints

## Key Components

### Database Schema
```typescript
// Users table for potential authentication
users: {
  id: serial (primary key)
  username: text (unique, not null)
  password: text (not null)
}

// Contact form submissions
contacts: {
  id: serial (primary key)
  name: text (not null)
  email: text (not null)
  subject: text (not null)
  message: text (not null)
  createdAt: timestamp (default now)
}
```

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contacts` - Retrieve all contact submissions (admin use)

### Frontend Components
- **Portfolio Sections**: Hero, About, Education, Experience, Projects, Skills, Certifications, Contact
- **UI Components**: Complete shadcn/ui component library
- **Theme Support**: Light/dark mode with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **Client Request**: User interacts with portfolio website
2. **Static Content**: Most content is statically rendered on the client
3. **Contact Form**: Form submission sends data to Express API
4. **Validation**: Zod schemas validate incoming data on both client and server
5. **Database**: Valid contact submissions stored in PostgreSQL
6. **Response**: Success/error feedback provided to user via toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Libraries**: Radix UI primitives, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Forms**: React Hook Form, Hookform resolvers
- **State**: TanStack Query for server state management
- **Utilities**: date-fns, clsx, tailwind-merge

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Development Tools
- **Replit Integration**: Cartographer plugin for development environment
- **Error Handling**: Runtime error overlay for development
- **Type Checking**: TypeScript with strict configuration

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Port**: 5000 (configured in .replit)
- **Hot Reload**: Vite HMR for frontend, tsx watch for backend
- **Environment**: NODE_ENV=development

### Production Build
- **Frontend**: `vite build` - outputs to `dist/public`
- **Backend**: `esbuild` bundle to `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Start Command**: `npm run start` (NODE_ENV=production)

### Database Management
- **Migrations**: Drizzle migrations in `./migrations` directory
- **Schema Push**: `npm run db:push` for development schema updates
- **Connection**: DATABASE_URL environment variable required

## Changelog

Changelog:
- June 18, 2025. Initial setup
- June 18, 2025. Updated certifications section with authentic certificates:
  - Removed Infosys Java Foundation certificate
  - Added Programming in Java (NPTEL 2024) with 56 score
  - Added Ethics in the Age of Generative AI (LinkedIn Learning 2023)
  - Updated Machine Learning certificate to IIIT Hyderabad
  - Added Design & Implementation of Human-Computer Interfaces (NPTEL 2024) with 63 score
  - Implemented PDF certificate viewing functionality with actual certificate files
- June 18, 2025. Connected Google Drive certificate links:
  - Updated all certificate "View Certificate" buttons to open Google Drive links
  - Programming in Java: https://drive.google.com/file/d/1FcMQcxAD2wL-46YnuqsSfeDXmt7NzrV-/view?usp=sharing
  - Machine Learning (IIT Allahabad): https://drive.google.com/file/d/1FcMQcxAD2wL-46YnuqsSfeDXmt7NzrV-/view?usp=drive_link
  - Ethics in Generative AI: https://drive.google.com/file/d/1J9gSqwKI5l6wrz6WrFvxExnlMhvSOQ3V/view?usp=sharing
  - Human-Computer Interfaces: https://drive.google.com/file/d/1J9gSqwKI5l6wrz6WrFvxExnlMhvSOQ3V/view?usp=sharing
- June 18, 2025. Updated project images:
  - Changed Pro Planet carbon footprint calculator project image to more relevant environmental/sustainability themed image
  - Updated about section profile photo with professional headshot
- June 19, 2025. Major portfolio enhancements and cleanup:
  - Changed hero title from "Full Stack Developer" to "Web Developer"
  - Updated education status to "Completed" with green indicators for all degrees
  - Added functional project links (GitHub repos and live demos for Pro Planet and Connect apps)
  - Updated certification descriptions and Google Drive links with correct URLs
  - Changed Twitter to X logo and implemented working social media links
  - Added resume download functionality with actual PDF file
  - Removed clubs and societies section from footer
  - Cleaned up all unused certificate PDFs, images, and duplicate resume files
  - Optimized file structure: only profile-photo.jpg and resume.pdf remain in public/assets

## User Preferences

Preferred communication style: Simple, everyday language.