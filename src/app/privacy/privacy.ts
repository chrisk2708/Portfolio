import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation-service';

/**
 * Privacy policy page in German or English, depending on the active language.
 * Uses the same layout as the legal notice page.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-privacy',
  styleUrl: '../imprint/imprint.scss',
  templateUrl: './privacy.html',
})
export class Privacy {
  /** Provides the active language and the texts of this page. */
  protected readonly i18n = inject(TranslationService);
}
