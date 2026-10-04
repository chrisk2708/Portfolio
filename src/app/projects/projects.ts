import { Component } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    {
      name: 'El Pollo Loco',
      knowledge: ['JavaScript', 'HTML', 'CSS'],
      description:
          'Jump, run and throw game based on object-orientated approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen',
      imgSrc: 'project_epl.png',
    },
    {
      name: 'Join',
      knowledge: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
          'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      imgSrc: 'project_join.png',
    },
  ];
}
