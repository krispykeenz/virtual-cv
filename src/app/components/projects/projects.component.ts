import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';

type ProjectModalTab = 'overview' | 'demo' | 'backend';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;

  categories: string[] = [];
  selectedCategory: string = 'All';

  selectedProject: Project | null = null;
  selectedTab: ProjectModalTab = 'overview';
  safeEmbedUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {
    this.categories = ['All', ...Array.from(new Set(this.projects.map(p => p.category)))];
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  get displayedProjects(): Project[] {
    const inCategory =
      this.selectedCategory === 'All'
        ? this.projects
        : this.projects.filter(p => p.category === this.selectedCategory);

    // Avoid duplicating featured cards when "All" is selected.
    return this.selectedCategory === 'All' ? inCategory.filter(p => !p.featured) : inCategory;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  openGithub(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  openLiveDemo(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  private buildEmbedUrl(rawUrl: string): string {
    // GitHub Pages sets cache-control headers (often 10min). When you redeploy demos,
    // iframes can keep showing older cached HTML. Add a cache-buster so the modal always
    // loads the latest version without requiring a hard refresh.
    const cacheBuster = `warp_embed=1&v=${Date.now()}`;

    const [beforeHash, hash] = rawUrl.split('#', 2);
    const separator = beforeHash.includes('?') ? '&' : '?';
    const withQuery = `${beforeHash}${separator}${cacheBuster}`;

    return hash ? `${withQuery}#${hash}` : withQuery;
  }

  openProject(project: Project, tab: ProjectModalTab = 'overview'): void {
    this.selectedProject = project;
    this.selectedTab = tab;

    const embedCandidate = project.liveDemoEmbedUrl ?? project.liveDemoUrl;
    const embedUrl = embedCandidate ? this.buildEmbedUrl(embedCandidate) : null;

    this.safeEmbedUrl = embedUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl)
      : null;

    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    this.safeEmbedUrl = null;
    this.selectedTab = 'overview';
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.selectedProject) this.closeProject();
  }
}
