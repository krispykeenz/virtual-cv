import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface FooterLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  navigationLinks: FooterLink[] = [
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/krispykeenz',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/keenan-burriss-07b23127a/',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:kjburriss@gmail.com',
      ariaLabel: 'Send me an email'
    }
  ];

  contactInfo = {
    email: 'kjburriss@gmail.com',
    phone: '+27 79 596 8037',
    location: 'Gqeberha, South Africa'
  };

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
