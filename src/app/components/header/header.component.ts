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
    if (!this.isMenuOpen) return;
    
    const target = event.target as HTMLElement;
    const isClickInsideMenu = target.closest('.navbar');
    const isClickOnToggle = target.closest('.mobile-menu-toggle');
    
    // Close menu if clicking outside the menu and toggle button
    if (!isClickInsideMenu && !isClickOnToggle) {
      this.closeMobileMenu();
    }
  }
}
