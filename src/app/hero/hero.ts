import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../services/translation-service';

/**
 * Above-the-fold section with photo, name, role, contact button and social links.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  /** Provides the texts of this section in the active language. */
  protected readonly i18n = inject(TranslationService);
}
