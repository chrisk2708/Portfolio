import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Render mode of the routes on the server: every page is prerendered at build time.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
