import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

/**
 * Starts the application on the server for server-side rendering and prerendering.
 *
 * @param context - Context of the current server request, provided by Angular.
 * @returns The started application.
 */
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
