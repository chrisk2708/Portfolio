import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation-service';

/**
 * Page footer with logo, links to the legal pages, copyright and social links.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  /** Provides the texts of the footer in the active language. */
  protected readonly i18n = inject(TranslationService);

  /** Current year for the copyright notice. */
  protected readonly year = new Date().getFullYear();
}
