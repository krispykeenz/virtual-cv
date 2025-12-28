import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMobileMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const header = target.closest('.header');
    const isClickInsideMenu = target.closest('.navbar') || target.closest('.mobile-menu-toggle');
    
    // Close menu if clicking outside and menu is open
    if (this.isMenuOpen && header && !isClickInsideMenu) {
      this.closeMobileMenu();
    }
  }
}
