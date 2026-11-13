import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { AnchorViewportScroller } from './services/anchor-viewport-scroller';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

/**
 * Application configuration for the browser.
 *
 * Enables anchor scrolling for the navigation links, the HTTP client for the contact form
 * and hydration of the prerendered pages.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
    ),
    { provide: ViewportScroller, useClass: AnchorViewportScroller },
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
};
