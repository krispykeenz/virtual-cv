import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

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
  errorMessage = '';

  constructor(private contactService: ContactService) {}

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
      this.errorMessage = '';
      
      try {
        const response = await this.contactService.sendContactMessage(this.contactForm).toPromise();
        
        if (response?.success) {
          console.log('✅ Message sent successfully:', response.messageId);
          this.isSubmitted = true;
          this.resetForm();
          
          // Hide success message after 8 seconds
          setTimeout(() => {
            this.isSubmitted = false;
          }, 8000);
        }
        
      } catch (error: any) {
        console.error('❌ Error submitting form:', error);
        this.errorMessage = error.message || 'Failed to send message. Please try again or contact me directly.';
        
        // Hide error message after 8 seconds
        setTimeout(() => {
          this.errorMessage = '';
        }, 8000);
      } finally {
        this.isSubmitting = false;
      }
    }
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