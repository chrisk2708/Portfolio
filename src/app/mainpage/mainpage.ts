import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Testimonials } from '../testimonials/testimonials';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  imports: [Header, Hero, About, Skills, Projects, Testimonials, Contact, Footer],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage {}
