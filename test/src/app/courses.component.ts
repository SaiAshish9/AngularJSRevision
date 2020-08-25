import { CoursesService } from './courses.service';
import { Component} from '@angular/core';

// decorator fn
@Component({
  selector: 'courses',
  template: `
    <div class="container-fluid">
      <h1>
        {{ 'Title:' + ' ' + title }}
      </h1>
      <p>
        {{ getTitle() }}
      </p>
      <ul>
        <li *ngFor="let course of courses">
          {{ course }}
        </li>
        <img [src]="imageUrl" />
      </ul>
      <table>
        <tr>
          <td [attr.colspan]="colSpan">1</td>
        </tr>
      </table>
      <div (click)="onDivClicked($event)">
        <button
          (click)="onSave($event)"
          [class.active]="isActive"
          [style.background]="isActive && color"
          class="btn btn-dark"
        >
          Save
        </button>
      </div>
      <input (keyup.enter)="onKeyUp($event)" />
    </div>
  `,
  // {{getTitle()}} string interpolation
  // <course>   "courses" </course>
  // <div id="courses"></div> "#courses"
  // <div class="course"></div> ".course"
})
export class CoursesComponent {
  title = 'List of courses';
  color = '#fff';
  colSpan = 2;
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  isActive = true;

  onKeyUp($event) {
    // if ($event.keyCode === 13) {
    //   alert($event.target.value);
    // }
  }

  onDivClicked($event) {
    alert('div clicked');
  }
  onSave($event) {
    $event.stopPropagation();
    alert('saved');
  }

  constructor(service: CoursesService) {
    // constructor(){
    // let service=new CoursesService();
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}