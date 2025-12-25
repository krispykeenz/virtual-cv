export type ProjectDemoKind = 'none' | 'iframe' | 'video';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;

  githubUrl?: string;

  /** Public live URL (opens in a new tab). */
  liveDemoUrl?: string;

  /** Optional URL that is safe to embed in an iframe. If omitted, the modal will not render an iframe. */
  liveDemoEmbedUrl?: string;

  /** Optional video (mp4/webm) or embeddable URL to show in the demo tab. */
  demoVideoUrl?: string;

  /** Short bullet points for the case study / overview modal. */
  highlights?: string[];

  /** Notes about the backend portion (even if the UI is the "headline"). */
  backendHighlights?: string[];

  /** Minimal steps to run locally (shown when no live demo is available). */
  runLocally?: string[];
}
