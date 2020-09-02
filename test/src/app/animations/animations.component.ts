import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';
import { fade, slide,list } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [fade,slide,list],
})

// void to default
export class AnimationsComponent implements OnInit {
  constructor() {}
   list=[1,2,3,4,5];

   onDelete(index){
     this.list.splice(index,1);
   }

  ngOnInit(): void {}
}
