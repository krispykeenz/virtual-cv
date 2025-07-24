import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  level: number; // 1-100
  icon: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      icon: '🎨',
      color: '#3498db',
      skills: [
        { name: 'Angular', level: 90, icon: '🅰️', description: 'Expert in Angular 15+ with TypeScript' },
        { name: 'React', level: 60, icon: '⚛️', description: 'Competent in React with Hooks and Context' },
        { name: 'Vue.js', level: 75, icon: '💚', description: 'Experience with Vue 3 and Composition API' },
        { name: 'TypeScript', level: 88, icon: '📘', description: 'Strong typing and advanced TypeScript features' },
        { name: 'JavaScript', level: 92, icon: '📜', description: 'ES6+ and modern JavaScript patterns' },
        { name: 'HTML5', level: 95, icon: '🌐', description: 'Semantic markup and accessibility' },
        { name: 'CSS3/SASS', level: 90, icon: '🎨', description: 'Advanced styling and animations' },
      ]
    },
    {
      name: 'Backend Development',
      icon: '⚙️',
      color: '#27ae60',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢', description: 'Server-side JavaScript and Express.js' },
        { name: 'Python', level: 85, icon: '🐍', description: 'Django, Flask, and data processing' },
        { name: 'Java', level: 80, icon: '☕', description: 'Spring Boot and enterprise applications' },
        { name: 'C#/.NET', level: 80, icon: '🔷', description: 'ASP.NET Core and Entity Framework' },
        { name: 'REST APIs', level: 90, icon: '🔗', description: 'RESTful service design and implementation' }
      ]
    },
    {
      name: 'Database & Cloud',
      icon: '☁️',
      color: '#9b59b6',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃', description: 'NoSQL database design and aggregation' },
        { name: 'PostgreSQL', level: 85, icon: '🐘', description: 'Advanced SQL and database optimization' },
        { name: 'AWS', level: 70, icon: '🟠', description: 'EC2, S3, Lambda, and CloudFormation' },
        { name: 'Docker', level: 60, icon: '🐳', description: 'Containerization and orchestration' },
        { name: 'Firebase', level: 85, icon: '🔥', description: 'Real-time database and authentication' }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: '🛠️',
      color: '#e74c3c',
      skills: [
        { name: 'Git', level: 92, icon: '📋', description: 'Version control and collaboration' },
        { name: 'CI/CD', level: 80, icon: '🔄', description: 'GitHub Actions and deployment pipelines' },
        { name: 'Webpack', level: 78, icon: '📦', description: 'Module bundling and optimization' },
        { name: 'Nginx', level: 75, icon: '🌐', description: 'Web server configuration and load balancing' }
      ]
    },
    {
      name: 'Design & UX',
      icon: '✨',
      color: '#f39c12',
      skills: [
        { name: 'Figma', level: 60, icon: '🎯', description: 'UI/UX design and prototyping' },
        { name: 'Adobe XD', level: 70, icon: '🎨', description: 'Design systems and wireframing' },
        { name: 'Responsive Design', level: 90, icon: '📱', description: 'Mobile-first and adaptive layouts' },
      ]
    }
  ];

  selectedCategory: SkillCategory | null = null;
  animationTriggered = false;

  ngOnInit(): void {
    // Trigger animations after component loads
    setTimeout(() => {
      this.animationTriggered = true;
    }, 500);
  }

  selectCategory(category: SkillCategory): void {
    this.selectedCategory = this.selectedCategory === category ? null : category;
  }

  getSkillLevelText(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Basic';
    return 'Beginner';
  }

  getProgressColor(level: number): string {
    if (level >= 90) return '#27ae60';
    if (level >= 80) return '#2ecc71';
    if (level >= 70) return '#f39c12';
    if (level >= 60) return '#e67e22';
    return '#e74c3c';
  }

  getAverageLevel(category: SkillCategory): number {
    const total = category.skills.reduce((sum, skill) => sum + skill.level, 0);
    return Math.round(total / category.skills.length);
  }

  getTotalSkills(): number {
    return this.skillCategories.reduce((total, cat) => total + cat.skills.length, 0);
  }

  getExpertSkills(): number {
    return this.skillCategories.reduce((total, cat) => 
      total + cat.skills.filter(s => s.level >= 90).length, 0);
  }

  getOverallProficiency(): number {
    const totalLevels = this.skillCategories.reduce((total, cat) => 
      total + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0);
    const totalSkills = this.getTotalSkills();
    return Math.round(totalLevels / totalSkills);
  }
}
