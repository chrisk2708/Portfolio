import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';

/**
 * Main page that puts all sections of the portfolio together.
 */
@Component({
  imports: [Hero, About, Skills, Projects, Testimonials, Contact],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage {}
