import { Component, afterNextRender, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lang, TranslationService } from '../services/translation-service';

/** A link in the navigation that scrolls to a section of the main page. */
interface NavItem {
  /** Translation key of the link text. */
  label: string;

  /** Id of the section the link scrolls to. */
  fragment: string;
}

/**
 * Fixed page header with logo, navigation and language switch.
 * On small screens the navigation moves into a menu that is opened with the burger button.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  /** Provides the texts and the active language. */
  protected readonly i18n = inject(TranslationService);

  /** Links of the desktop navigation. */
  protected readonly navItems: NavItem[] = [
    { label: 'nav.about', fragment: 'about' },
    { label: 'nav.skills', fragment: 'skills' },
    { label: 'nav.portfolio', fragment: 'projects' },
  ];

  /** Links of the mobile menu, which also contains the contact section. */
  protected readonly mobileNavItems: NavItem[] = [
    { label: 'nav.about', fragment: 'about' },
    { label: 'nav.mySkills', fragment: 'skills' },
    { label: 'nav.portfolio', fragment: 'projects' },
    { label: 'nav.contact', fragment: 'contact' },
  ];

  /** Languages offered in the language switch. */
  protected readonly languages: Lang[] = ['DE', 'EN'];

  /** Fragment of the last clicked navigation link, used to highlight it. */
  protected readonly activeNavItem = signal<string | null>(null);

  /** Whether the mobile menu is open. */
  protected readonly isMenuOpen = signal(false);

  /**
   * Restores the language the visitor chose on an earlier visit once the page is rendered in the browser.
   */
  constructor() {
    afterNextRender(() => this.i18n.restoreSavedLanguage());
  }

  /**
   * Highlights the clicked navigation link and closes the mobile menu.
   *
   * @param fragment - Id of the section the link points to.
   */
  protected setActive(fragment: string): void {
    this.activeNavItem.set(fragment);
    this.closeMenu();
  }

  /**
   * Opens the mobile menu if it is closed and closes it if it is open.
   */
  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  /**
   * Closes the mobile menu.
   */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
