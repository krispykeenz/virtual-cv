import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce experience with modern UI and secure payment flows.',
    longDescription:
      'A full-stack e-commerce platform featuring authentication, product catalog, cart, and order management. Includes payment integration and a responsive UI built for real-world checkout flows.',
    image: 'assets/images/e-com.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
    githubUrl: 'https://github.com/krispykeenz/E-Commerce',
    liveDemoUrl: 'https://krispykeenz.github.io/E-Commerce/',
    category: 'Full Stack',
    featured: true,
    highlights: ['Auth + protected routes', 'Cart/checkout flow', 'Payment integration (Stripe)', 'Responsive UI'],
    backendHighlights: ['REST API for products/orders', 'JWT auth and request validation', 'MongoDB persistence'],
    runLocally: [
      'Clone the repo',
      'Install dependencies (frontend + backend)',
      'Start the API, then run the UI',
      'Configure env vars (e.g. Stripe keys)'
    ]
  },
  {
    id: 2,
    title: 'MentorMatch SA',
    description: 'Mobile-first mentorship platform with swipe-style discovery (demo mode).',
    longDescription:
      'A mobile-first mentorship platform built with Next.js and Firebase services. This CV demo runs with mocked data (no auth/DB), but showcases the UX patterns and flows.',
    image: 'assets/images/mentor-matcher.svg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind', 'PWA'],
    githubUrl: 'https://github.com/krispykeenz/mentor-matcher',
    liveDemoUrl: 'https://krispykeenz.github.io/mentor-matcher/',
    category: 'Full Stack',
    featured: true,
    highlights: ['Swipe-style discovery', 'Onboarding + profile flows', 'Accessibility-first components', 'PWA shell'],
    backendHighlights: ['Firebase Auth', 'Firestore data model + indexes', 'Server-side routes via Firebase Admin SDK'],
    runLocally: ['Clone the repo', 'npm install', 'Create .env.local from .env.example', 'npm run dev']
  },
  {
    id: 3,
    title: 'Carrier Pigeon Post',
    description: 'A whimsical messaging experience: texts delivered by “pigeons” across a map.',
    longDescription:
      'An Expo-powered React Native app using Supabase auth and real-time patterns to simulate message flights across the globe. Built around delightful UI and an async-first data layer.',
    image: 'https://raw.githubusercontent.com/krispykeenz/carrier-pigeon/main/assets/icon.png',
    technologies: ['Expo', 'React Native', 'TypeScript', 'Supabase', 'React Query'],
    githubUrl: 'https://github.com/krispykeenz/carrier-pigeon',
    liveDemoUrl: 'https://krispykeenz.github.io/carrier-pigeon/',
    category: 'Mobile',
    featured: true,
    highlights: ['Auth + session handling', 'Optimistic UI patterns', 'Map-based animation concept', 'Type-safe app structure'],
    backendHighlights: ['Supabase auth + database', 'Row-level security and policies', 'Query caching + invalidation'],
    runLocally: ['Clone the repo', 'Install dependencies', 'Run with Expo (iOS/Android simulator)', 'Add Supabase env vars']
  },
  {
    id: 4,
    title: 'Weather Analytics Dashboard',
    description: 'Interactive data visualization dashboard for weather analytics and forecasting.',
    longDescription:
      'A dashboard for weather analytics with charts and map visualizations. Integrates with weather APIs and supports exploratory analysis of historical trends and forecasts.',
    image: 'assets/images/weather_dashboard.png',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Flask', 'Chart.js'],
    githubUrl: 'https://github.com/krispykeenz/Weather_Dashboard',
    liveDemoUrl: 'https://krispykeenz.github.io/Weather_Dashboard/',
    category: 'Data Visualization',
    featured: true,
    highlights: ['Charts + dashboards', 'API integration', 'Data-driven UI patterns'],
    backendHighlights: ['Flask API layer for data retrieval/aggregation'],
    runLocally: [
      'Clone the repo',
      'Install frontend deps and run dev server',
      'Set up Python env + run Flask API',
      'Add API keys if needed'
    ]
  },
  {
    id: 5,
    title: 'EduMate',
    description: 'Peer-to-peer tutoring app with session requests and messaging (demo mode).',
    longDescription:
      'A peer-to-peer tutoring app built as a university project. This CV demo runs with mocked data to safely showcase the UX without deploying backend services.',
    image: 'assets/images/edumate.svg',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'Prisma', 'Socket.IO', 'Tailwind'],
    githubUrl: 'https://github.com/krispykeenz/EduMate',
    liveDemoUrl: 'https://krispykeenz.github.io/EduMate/',
    category: 'Full Stack',
    featured: false,
    highlights: ['Tutor discovery UX', 'Session requests', 'Realtime messaging concept'],
    backendHighlights: ['Express API', 'Prisma ORM', 'JWT auth patterns', 'Socket.IO realtime'],
    runLocally: ['Clone the repo', 'Install frontend + backend deps', 'Configure env vars', 'Start backend then frontend']
  },
  {
    id: 6,
    title: 'IAMRS',
    description: 'Industrial telemetry monitoring, alerting, and maintenance workflows (demo mode).',
    longDescription:
      'An industrial asset monitoring and reporting system. This CV demo uses mocked telemetry to showcase the dashboard experience without running Docker/SQL.',
    image: 'assets/images/iamrs.svg',
    technologies: ['.NET 8', 'C#', 'Blazor Server', 'EF Core', 'Docker', 'SQL Server'],
    githubUrl: 'https://github.com/krispykeenz/IAMRS',
    liveDemoUrl: 'https://krispykeenz.github.io/IAMRS/',
    category: 'Full Stack',
    featured: true,
    highlights: ['Telemetry dashboards', 'Anomaly/threshold detection', 'Alert workflows', 'Simulator-driven data'],
    backendHighlights: ['REST API + background workers', 'EF Core persistence', 'Dockerized SQL Server'],
    runLocally: ['Clone the repo', 'Start services with Docker', 'Run API + dashboard', 'Run simulator to generate telemetry']
  },
  {
    id: 7,
    title: 'REST API Gateway',
    description: 'API gateway with authentication and rate limiting for microservice-style setups.',
    longDescription:
      'A Node.js API gateway providing authentication, request routing, rate limiting, and monitoring-friendly patterns for service-to-service communication.',
    image: 'assets/images/restAPI.png',
    technologies: ['Node.js', 'Express.js', 'Docker', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/krispykeenz/Restful_Api',
    liveDemoUrl: 'https://krispykeenz.github.io/Restful_Api/',
    category: 'Backend',
    featured: false,
    highlights: ['Auth middleware', 'Rate limiting', 'Service routing patterns'],
    backendHighlights: ['Redis-backed rate limiting', 'JWT verification', 'Dockerized setup'],
    runLocally: ['Clone the repo', 'Start dependencies (Docker/Redis)', 'Run the gateway', 'Hit routes via Postman/curl']
  },
  {
    id: 8,
    title: 'Expense Tracker',
    description: 'Cross-platform app for personal expense tracking and simple analytics (demo mode).',
    longDescription:
      'A mobile expense tracker with categories, budgets, and basic analytics for spending habits. Demo mode avoids Firebase and runs with static data.',
    image: 'assets/images/expense-tracker.jpg',
    technologies: ['React Native', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/krispykeenz/Displaying_Finances',
    liveDemoUrl: 'https://krispykeenz.github.io/Displaying_Finances/',
    category: 'Mobile',
    featured: false,
    highlights: ['Expense categories', 'Budget tracking', 'Simple charts/insights'],
    backendHighlights: ['Firebase auth/database (as applicable)'],
    runLocally: ['Clone the repo', 'Install dependencies', 'Run with Expo / RN CLI', 'Configure Firebase env']
  }
];
