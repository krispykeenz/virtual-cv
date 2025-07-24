import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  personalInfo = {
    name: 'Keenan Burriss',
    title: 'Full Stack Developer & UI/UX Designer',
    location: 'Gqeberha, South Africa',
    bio: 'Passionate full-stack developer with a keen eye for design and user experience. I love creating beautiful, functional applications that solve real-world problems. With expertise in modern web technologies and a commitment to clean, maintainable code, I bring ideas to life through thoughtful development and creative problem-solving.',
    highlights: [
      'Expert in Angular',
      'Backend development with Node.js, C# and Python',
      'Cloud deployment and DevOps practices',
      'Mobile-first responsive design',
      'Performance optimization specialist'
    ],
    stats: {
      experience: '2+',
      projects: '10+',
      technologies: '10+'
    }
  };
}
