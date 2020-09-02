import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

import { fade } from '../../animations/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('slide', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(3000)]),
    ]),
    fade,
  ],
})
export class SignupComponent implements OnInit {
  constructor() {}
  maxDate;
  selected = 1;

  next() {
    this.selected += 1;
  }

  prev() {
    this.selected -= 1;
  }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
