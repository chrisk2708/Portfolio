import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  skills = [
    { name: 'CSS', icon: './assets/icons/css-icon.png' },
    { name: 'HTML', icon: './assets/icons/html-icon.png' },
    { name: 'JavaScript', icon: './assets/icons/javascript-icon.png' },
    { name: 'TypeScript', icon: './assets/icons/typescript-icon.png' },
    { name: 'Angular', icon: './assets/icons/angular-icon.png' },
    { name: 'Git', icon: './assets/icons/git-icon.png' },
    { name: 'Supabase', icon: './assets/icons/supabase-icon.png' },
    { name: 'REST API', icon: './assets/icons/rest-api-icon.png' },
    { name: 'Scrum', icon: './assets/icons/scrum-icon.png' },
    { name: 'Material Design', icon: './assets/icons/material-design-icon.png' },
    { name: 'Continually Learning', icon: './assets/icons/continually-learning-icon.png'}
  ]
}
