import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  navItems = [
    { label: 'About Me', fragment: '#about' },
    { label: 'Skills', fragment: '#skills' },
    { label: 'Portfolio', fragment: '#projects' }
  ];

  activeNavItem: string = 'About Me';
  setActive(itemLabel: string) {
    this.activeNavItem = itemLabel;
  }

  languages = [
    { code: 'DE', active: false },
    { code: 'EN', active: true }
  ];

  switchLanguage(selectedLang: { code: string; active: boolean }) {
    this.languages.forEach(lang => lang.active = (lang === selectedLang));
  }
}
