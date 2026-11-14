import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Skill } from '../interfaces/skill';
import { TranslationService } from '../services/translation-service';

/**
 * Skills section with the logos of the technologies and a short text with a contact button.
 */
@Component({
  imports: [RouterLink],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  /** Provides the texts of this section in the active language. */
  protected readonly i18n = inject(TranslationService);

  /** Skills in the order they are shown. */
  protected readonly skills: Skill[] = [
    { name: 'HTML', label: 'HTML', icon: './assets/icons/skills/html.png' },
    { name: 'CSS', label: 'CSS', icon: './assets/icons/skills/css.png' },
    { name: 'JavaScript', label: 'JavaScript', icon: './assets/icons/skills/javascript.png' },
    { name: 'TypeScript', label: 'TypeScript', icon: './assets/icons/skills/typescript.png' },
    { name: 'Angular', label: 'Angular', icon: './assets/icons/skills/angular.png' },
    { name: 'Supabase', label: 'Supabase', icon: './assets/icons/skills/supabase.png' },
    { name: 'Git', label: 'Git', icon: './assets/icons/skills/git.png' },
    { name: 'REST API', label: 'REST-API', icon: './assets/icons/skills/rest-api.png' },
    { name: 'Scrum', label: 'Scrum', icon: './assets/icons/skills/scrum.png' },
    {
      name: 'Material Design',
      label: 'Material\nDesign',
      icon: './assets/icons/skills/material-design.png',
    },
    {
      name: 'Continually Learning',
      label: 'Continually\nlearning',
      icon: './assets/icons/skills/continually-learning.png',
      highlight: true,
    },
  ];
}
