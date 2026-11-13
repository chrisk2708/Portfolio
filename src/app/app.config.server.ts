import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/**
 * Providers that are only needed for server-side rendering and prerendering.
 */
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))],
};

/**
 * Application configuration for the server: the browser configuration extended by the server providers.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);
