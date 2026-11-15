import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation-service';

/**
 * Legal notice page in German or English, depending on the active language.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-imprint',
  styleUrl: './imprint.scss',
  templateUrl: './imprint.html',
})
export class Imprint {
  /** Provides the active language and the texts of this page. */
  protected readonly i18n = inject(TranslationService);
}
