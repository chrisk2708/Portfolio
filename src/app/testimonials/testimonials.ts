import { Component } from '@angular/core';
import { Testimonial } from '../interfaces/testimonial';

@Component({
  imports: [],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})

export class Testimonials {
  currId = 0;

  prev():void {
    if (this.currId == 0) {
      this.currId = this.testimonials.length - 1;
    } else {
      this.currId -=1;
    }
  }

  next():void {
    if (this.currId == this.testimonials.length - 1) {
      this.currId = 0;
    } else {
      this.currId +=1;
    }
  }

  testimonials: Testimonial[] = [
    {
      currId: 1,
      name: 'V.Schuster',
      role: 'Team Partner',
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      img: 'user1.png',
      points: 'slider_point1.png'
    },
    {
      currId: 2,
      name: 'E.Eichinger',
      role: 'Team Partner',
      text: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      img: 'user2.png',
      points: 'slider_point2.png'
    },
    {
      currId: 3,
      name: 'I.Nuber',
      role: 'Frontend Engineer',
      text: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      img: 'user3.png',
      points: 'slider_point3.png'
    },
  ];
}
