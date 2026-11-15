import { Component, computed, inject, signal } from '@angular/core';
import { Testimonial } from '../interfaces/testimonial';
import { TranslationService } from '../services/translation-service';

/**
 * Slider with references from former team members.
 * Arrows and dots switch between the references, the last one is followed by the first one again.
 */
@Component({
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  /** Provides the texts of this section in the active language. */
  protected readonly i18n = inject(TranslationService);

  /** References in the order they are shown. */
  protected readonly testimonials: Testimonial[] = [
    {
      name: 'M. Schmitz',
      textKey: 'testimonials.1.text',
      roleKey: 'testimonials.1.role',
      img: 'user1.png',
    },
    {
      name: 'E. M. Hashimi',
      textKey: 'testimonials.2.text',
      roleKey: 'testimonials.2.role',
      img: 'user2.png',
    },
    {
      name: 'V. Sonneck',
      textKey: 'testimonials.3.text',
      roleKey: 'testimonials.3.role',
      img: 'user3.png',
    },
  ];

  /** Index of the visible reference. */
  protected readonly currentIndex = signal(0);

  /** The visible reference. */
  protected readonly current = computed(() => this.testimonials[this.currentIndex()]);

  /**
   * Shows the previous reference, or the last one when the first one is visible.
   */
  protected prev(): void {
    const count = this.testimonials.length;
    this.currentIndex.update((i) => (i - 1 + count) % count);
  }

  /**
   * Shows the next reference, or the first one when the last one is visible.
   */
  protected next(): void {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  /**
   * Shows the reference at the given position.
   *
   * @param index - Position of the reference in the list.
   */
  protected goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
