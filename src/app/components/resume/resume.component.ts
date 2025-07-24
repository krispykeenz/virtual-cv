import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  education: Education[] = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'North West University',
      period: '2021 - 2025',
      description: 'Specialized in Software Engineering and Web Development. Relevant coursework included Data Structures, Algorithms, Database Systems, and Human-Computer Interaction.'
    },
  ];

  experience: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Mac Automation',
      period: 'Jan 2023 - Present',
      location: 'Gqeberha, South Africa',
      responsibilities: [
        'Led software development for automation and monitoring systems',
        'Managed cloud/server setups and Docker deployments',
        'Built APIs and CI/CD pipelines for internal projects',
        'Installed 141 monitoring devices for municipal water meters',
        'Provided IT support, including PC and electrical fixes'
      ],
      technologies: ['Angular', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'GroupsRUs',
      period: 'Jun 2022 - Dec 2022',
      location: 'Gqeberha, South Afrrica',
      responsibilities: [
        'Collected and translated user requirements for the dev team',
        'Built internal Point of Sales and accounting tools',
        'Improved communication between users and developers'
      ],
      technologies: ['B4J', 'JAVA', 'C#', 'Sourcetree']
    },
  ];

  certifications: Certification[] = [
    {
      name: 'ABB Value Provider Program',
      issuer: 'ABB',
      date: 'November 2024',
      credentialId: '9TPC002609-GLB-EN-V3',
      link: 'https://mylearning.abb.com/learningpage/4878_enUS/ExpertusONE_1'
    },
  ];

  downloadResume(): void {
    // In a real application, this would trigger a PDF download
    console.log('Downloading resume...');
    // You can implement actual PDF generation or link to a static PDF file
    window.open('assets/documents/resume.pdf', '_blank');
  }
}
