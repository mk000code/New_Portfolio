# Portfolio Website

## Overview

This is a personal portfolio website for Mohammad Kaif built as a full-stack application showcasing professional work, skills, and contact information. The application features a modern, responsive design with smooth scrolling navigation and interactive components.

## Recent Changes

- January 2025: Personalized portfolio content with Mohammad Kaif's name and contact information
- Fixed React Icons import issue (SiAmazonaws -> SiAmazonwebservices)
- Updated navigation logo initials to "MK"
- Updated hero section with Mohammad Kaif's name and professional headshot
- Updated contact information and footer branding
- Updated skills section with Python, C, C++ as primary languages
- Enhanced Projects section with colorful animated gradients and floating orbs
- Changed from "Featured Projects" to "Working on Projects" with E-commerce App
- Updated email to mdkaif4530@gmail.com and location to Ghaziabad - Delhi-NCR
- Added Problem Solving Excellence section with interactive charts showing 250+ DSA problems solved
- Integrated Recharts for data visualization (pie chart and bar chart)
- Added achievement stats with 100 LeetCode problems and 85% success rate

## User Preferences

- Preferred communication style: Simple, everyday language
- Portfolio owner: Mohammad Kaif
- Personalization date: January 2025

## System Architecture

The project follows a monorepo structure with a clear separation between frontend and backend code:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Icons**: Lucide React icons and React Icons

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **API**: RESTful API endpoints
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom logging middleware for API requests

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores contact form submissions (id, firstName, lastName, email, subject, message, createdAt)
- **Validation**: Zod schemas for runtime type checking and validation

### UI Components Structure
- **Pages**: Single-page application with sections (Hero, About, Projects, Contact)
- **Components**: Reusable UI components organized by feature
- **Shared Components**: Common UI elements in `/components/ui/`
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **Contact Form Submission**: Form data is validated client-side using Zod schemas, then sent to `/api/contact` endpoint
2. **Server Processing**: Express middleware validates and processes the request, stores data using Drizzle ORM
3. **Response Handling**: TanStack Query manages API responses and provides loading/error states
4. **UI Updates**: Toast notifications provide user feedback on form submission success/failure

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React, React DOM, React Router (Wouter)
- **Node.js runtime**: Express.js server framework
- **TypeScript**: Full TypeScript support across frontend and backend

### UI/UX Dependencies
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets
- **Embla Carousel**: Carousel component functionality

### Database & Validation
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: PostgreSQL database provider
- **Zod**: Runtime type validation and schema parsing

### Development Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds the React application to `dist/public/`
2. **Backend**: esbuild bundles the Express server to `dist/index.js`
3. **Static Assets**: Frontend assets are served by the Express server in production

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and Express API server
- **Production**: Single Express server serves both API and static files
- **Database**: PostgreSQL connection via environment variable `DATABASE_URL`

### Scripts
- `dev`: Runs development server with hot reload
- `build`: Builds both frontend and backend for production
- `start`: Runs production server
- `db:push`: Pushes database schema changes using Drizzle Kit

The application uses a hybrid approach where the Express server handles both API requests and serves the built React application, making it suitable for platforms like Replit, Heroku, or similar Node.js hosting environments.