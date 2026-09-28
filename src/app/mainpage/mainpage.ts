import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Skills } from '../skills/skills';

@Component({
  imports: [Header, Hero, About, Skills],
  selector: 'app-mainpage',
  styleUrl: './mainpage.scss',
  templateUrl: './mainpage.html',
})
export class Mainpage {}
