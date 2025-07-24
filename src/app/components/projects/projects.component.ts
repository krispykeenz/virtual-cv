import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  category: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI and secure payment processing',
      longDescription: 'A comprehensive e-commerce platform built with Angular and Node.js, featuring user authentication, product catalog, shopping cart, order management, and integrated payment processing with Stripe.',
      image: 'https://raw.githubusercontent.com/krispykeenz/virtual-cv/refs/heads/main/src/assets/images/e-com.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'JWT', 'Bootstrap'],
      githubUrl: 'https://github.com/krispykeenz/E-Commerce',
      category: 'Full Stack',
      featured: true,
    },
    {
      id: 2,
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather analytics and forecasting',
      longDescription: 'Interactive dashboard displaying weather data analytics with charts, maps, and forecasting capabilities. Integrates with multiple weather APIs and provides historical data analysis.',
      image: 'https://raw.githubusercontent.com/krispykeenz/virtual-cv/refs/heads/main/src/assets/images/weather_dashboard.png',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Flask', 'Chart.js', 'Leaflet'],
      githubUrl: 'https://github.com/krispykeenz/Weather_Dashboard',  
      category: 'Data Visualization',
      featured: false,
    },
    {
      id: 3,
      title: 'REST API Gateway',
      description: 'Microservices API gateway with authentication and rate limiting',
      longDescription: 'A scalable API gateway built with Node.js and Docker, providing authentication, rate limiting, request routing, and monitoring for microservices architecture.',
      image: 'https://raw.githubusercontent.com/krispykeenz/virtual-cv/refs/heads/main/src/assets/images/restAPI.png',
      technologies: ['Node.js', 'Docker', 'Redis', 'MongoDB', 'JWT', 'Express.js'],
      githubUrl: 'https://github.com/krispykeenz/Restful_Api',
      category: 'Backend',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile Expense Tracker',
      description: 'Cross-platform mobile app for personal expense tracking',
      longDescription: 'Mobile application for tracking personal expenses with categories, budgets, and spending analytics. Built with React Native for cross-platform compatibility.',
      image: 'https://picsum.photos/800/600?random=6',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo'],
      githubUrl: 'https://github.com/krispykeenz/Displaying_Finances',
      category: 'Mobile',
      featured: false,
    }
  ];

  categories: string[] = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'Data Visualization', 'Machine Learning'];
  selectedCategory: string = 'All';
  filteredProjects: Project[] = [...this.projects];

  ngOnInit(): void {
    this.filterProjects();
  }

  filterProjects(): void {
    if (this.selectedCategory === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category === this.selectedCategory
      );
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProjects();
  }

  openGithub(url: string): void {
    window.open(url, '_blank');
  }

  openLiveDemo(url: string): void {
    window.open(url, '_blank');
  }
}
