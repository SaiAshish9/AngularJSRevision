import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

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
      <br/>
      <input #email (keyup.enter)="onKey(email.value)" />
      <br/>
      <input [value]="email1" (keyup.enter)="email1=$event.target.value;onKeyUp1()" />
      <br/>
      <input [(ngModel)]="email2" (keyup.enter)="onKeyUp2()" />
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
  email;
  email1="me@example.com";
  email2;


  onKeyUp2() {
  console.log(this.email2)
  }
  onKeyUp($event) {
    // if ($event.keyCode === 13) {
    //   alert($event.target.value);
    // }
  }

  onKeyUp1(){
    console.log(this.email1)
  }

  onKey(email) {
    // alert(email);
  alert(this.email)
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
