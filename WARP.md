# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Virtual CV is a portfolio website built with **Angular 17** (frontend) and **Node.js/Express** (backend). The frontend uses standalone components architecture, and the backend handles contact form submissions with email functionality.

## Development Commands

### Frontend (Angular)
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:4200)
npm start
# or: ng serve

# Build for production
npm run build
# or: ng build --configuration production

# Run unit tests (Karma + Jasmine)
npm test
# or: ng test

# Watch mode for development builds
npm run watch

# Deploy to GitHub Pages
npm run deploy

# Generate new component/service/etc
ng generate component component-name
ng generate service service-name
```

### Backend (Express API)
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server with auto-reload (runs on http://localhost:3000)
npm run dev

# Start production server
npm start

# Test email service
curl http://localhost:3000/api/contact/test

# Health check
curl http://localhost:3000/health
```

## Architecture

### Frontend Structure
- **Standalone Components**: Angular 17 uses standalone components without NgModules
- **Routing**: Client-side routing in `src/app/app.routes.ts` with lazy loading
- **Styling**: SCSS with global variables, glassmorphism effects, and responsive breakpoints
- **Component Prefix**: `app` (configured in angular.json)

**Key Components**:
- `header` - Navigation with mobile hamburger menu, sticky positioning
- `about` - Profile section with statistics cards
- `resume` - Timeline layout for experience, education, certifications
- `projects` - Filterable gallery with project cards (uses `Project` model from `models/project.model.ts`)
- `skills` - Categorized skills with animated progress bars
- `contact` - Form with validation, integrates with backend via `ContactService`
- `testimonials` - Testimonials display
- `footer` - Site footer with links and social media

**Services**:
- `ContactService` (`src/app/services/contact.service.ts`) - Handles HTTP communication with backend API, includes error handling and timeouts

### Backend Structure
- **Framework**: Express.js with security middleware (Helmet, CORS, rate limiting)
- **Email Service**: Nodemailer/SendGrid for sending contact form submissions
- **Validation**: Joi schema validation for contact form inputs
- **Rate Limiting**: 5 requests per 15 minutes per IP on `/api/contact`

**Key Files**:
- `backend/server.js` - Main server setup, middleware, routing
- `backend/routes/contact.js` - Contact form endpoints
- `backend/services/emailService.js` - Email sending logic (notification + auto-reply)
- `backend/.env` - Environment configuration (SMTP settings, email addresses)

### Environment Configuration
- `src/environments/environment.ts` - Development config (apiUrl points to Render deployment)
- `src/environments/environment.prod.ts` - Production config
- File replacement happens during production builds via angular.json configuration

### Deployment
- **Frontend**: Configured for GitHub Pages deployment via `npm run deploy` (uses angular-cli-ghpages)
- **Backend**: Deployed to Render (config in `render.yaml`), uses free tier on Oregon region
- Production API URL: `https://virtual-cv-00w0.onrender.com/api`

## TypeScript Configuration
- **Strict mode enabled**: All strict TypeScript checks are on
- **Target**: ES2022
- **Module system**: ES2022 with ESM
- **Experimental decorators**: Enabled for Angular

## Testing
- **Framework**: Karma + Jasmine
- **Test files**: `.spec.ts` files colocated with components/services
- Run all tests: `ng test`
- Test config: `tsconfig.spec.json`

## Build Output
- Frontend builds to: `dist/virtual-cv/`
- Production bundle size: ~440KB (~96KB compressed)
- Budget constraints defined in angular.json (500KB warning, 1MB error for initial bundle)

## Backend Email Setup
The contact form requires backend email configuration:
1. Copy `backend/.env.example` to `backend/.env`
2. Configure SMTP settings (Gmail requires App Password with 2FA enabled)
3. Set `TO_EMAIL` (where messages are sent) and `FROM_EMAIL` (sender address)
4. Backend sends two emails per submission: notification to owner + auto-reply to sender

## CORS Configuration
Backend allows requests from:
- `http://localhost:4200` (local dev)
- `https://krispykeenz.github.io` (GitHub Pages)
- `https://keenanburriss.netlify.app` (Netlify deployment)

When deploying to new domains, update `backend/server.js` CORS origins.

## Common Patterns
- **Data Models**: TypeScript interfaces in `src/app/models/` (e.g., `Project` interface)
- **Reactive Forms**: Contact form uses Angular Reactive Forms with validation
- **HTTP Client**: Configured in `src/app/app.config.ts` with `provideHttpClient()`
- **Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
