import { Component, inject } from '@angular/core';
import { Project } from '../interfaces/project';
import { TranslationService } from '../services/translation-service';

/**
 * Portfolio section that lists the projects with preview, technologies, description and links.
 */
@Component({
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  /** Provides the texts of this section in the active language. */
  protected readonly i18n = inject(TranslationService);

  /** Projects in the order they are shown. */
  protected readonly projects: Project[] = [
    {
      name: 'Join',
      knowledge: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      descriptionKey: 'projects.join.description',
      imgSrc: 'project_join.png',
      urlTest: 'https://chrisk2708.github.io/Join/',
      urlGit: 'https://github.com/chrisk2708/Join',
    },
    {
      name: 'El Pollo Loco',
      knowledge: ['JavaScript', 'HTML', 'CSS'],
      descriptionKey: 'projects.epl.description',
      imgSrc: 'project_epl.png',
      urlTest: 'https://chrisk2708.github.io/El_Pollo_Loco/',
      urlGit: 'https://github.com/chrisk2708/El_Pollo_Loco',
    },
    {
      name: 'Pokédex',
      knowledge: ['JavaScript', 'HTML', 'CSS', 'API'],
      descriptionKey: 'projects.pokedex.description',
      imgSrc: 'project_pokedex.png',
      urlTest: 'https://chrisk2708.github.io/Pokedex/',
      urlGit: 'https://github.com/chrisk2708/Pokedex',
    },
  ];
}
