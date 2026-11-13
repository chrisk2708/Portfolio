import { Routes } from '@angular/router';
import { Mainpage } from './mainpage/mainpage';
import { Imprint } from './imprint/imprint';
import { Privacy } from './privacy/privacy';

/**
 * Routes of the application: the main page and the two legal pages.
 * Unknown paths lead back to the main page.
 */
export const routes: Routes = [
  { path: '', component: Mainpage, title: 'Christian Sobotta - Frontend Developer' },
  { path: 'imprint', component: Imprint, title: 'Legal Notice - Christian Sobotta' },
  { path: 'privacy', component: Privacy, title: 'Privacy Policy - Christian Sobotta' },
  { path: '**', redirectTo: '' },
];
