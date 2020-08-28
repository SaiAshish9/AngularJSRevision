import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  log(x){
    console.log(x)
    // dirty -> whether form has changed the moment form was initialized
    // pristine clean
    // invalid valid
    // touched untouched
  }

  submit(f){
    console.log(f.value,f.valid)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
