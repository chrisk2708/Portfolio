import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation-service';

/**
 * "About me" section with a short introduction, three personal statements and a photo.
 */
@Component({
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  /** Provides the texts of this section in the active language. */
  protected readonly i18n = inject(TranslationService);
}
