import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgModel} from "@angular/forms";
import {ServicesService} from "./services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proemialverifier';

  constructor(
    private service: ServicesService
  ) {
  }

  resultUpdte: boolean = false;
  email: string;
  result: any;
  singleEmail(emails: string){
    console.log(this.email)
    this.service.getSingleTest(emails).subscribe(
      data => {
        this.result = data,
          this.resultUpdte = true;
        this.email = "";
      }
    )
  }

}
