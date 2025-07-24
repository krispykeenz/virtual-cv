import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      label: 'Email',
      value: 'kjburriss@gmail.com',
      link: 'mailto:kjburriss@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+27 79 596 8037',
      link: 'tel:+27795968037'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Gqeberha, South Africa'
    },
    {
      icon: '💼',
      label: 'Status',
      value: 'Available for freelance'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/krispykeenz',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/keenan-burriss-07b23127a/',
      color: '#0077b5'
    },
    {
      name: 'Medium',
      icon: '📝',
      url: 'https://medium.com/@keenanburriss',
      color: '#00ab6c'
    },
    {
      name: 'Dev.to',
      icon: '👨‍💻',
      url: 'https://dev.to/krispykeenz',
      color: '#0a0a0a'
    }
  ];

  subjectOptions = [
    'General Inquiry',
    'Project Collaboration',
    'Freelance Opportunity',
    'Technical Consultation',
    'Speaking Engagement',
    'Other'
  ];

  async onSubmit(form: NgForm): Promise<void> {
    if (form.valid) {
      this.isSubmitting = true;
      
      try {
        // Simulate API call
        await this.delay(2000);
        
        console.log('Form submitted:', this.contactForm);
        
        // In a real application, you would send this data to your backend
        // Example: await this.contactService.sendMessage(this.contactForm);
        
        this.isSubmitted = true;
        this.resetForm();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (show error message to user)
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  openSocialLink(url: string): void {
    window.open(url, '_blank');
  }

  openContactLink(link: string): void {
    window.open(link, '_blank');
  }
}
