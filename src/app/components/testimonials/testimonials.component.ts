import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  testimonial: string;
  rating: number;
  date?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Daniel Duvenage',
      role: 'Head SCADA Engineer',
      company: 'Mac Automation.',
      testimonial: 'Keenan has a standout growth mindset and a proven ability to ramp up quickly in unfamiliar areas. He does not limit himself to what he already knows; instead, he actively seeks out challenges that stretch his capabilities and uses them as opportunities to learn and deliver real outcomes.',
      rating: 5,
      date: '2024-11'
    },
    {
      name: 'Julian Heim',
      role: 'Senior Developer',
      company: 'GroupsRUs',
      testimonial: 'Keenan consistently demonstrates exceptional communication skills as a software developer, particularly in client-facing environments where clarity, confidence, and precision are non-negotiable.',
      rating: 5,
      date: '2024-09'
    }
  ];

  getStars(rating: number): string[] {
    return Array(rating).fill('★');
  }
}
