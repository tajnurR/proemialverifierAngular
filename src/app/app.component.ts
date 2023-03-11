import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgModel} from "@angular/forms";
import {ServicesService} from "./services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("byname")byname: NgForm;
  title = 'proemialverifier';

  constructor(
    private service: ServicesService
  ) {
  }

  resultUpdte: boolean = false;
  email: string;
  result: any;

  singleEmail(emails: string){
    this.service.getSingleTest(emails).subscribe(
      data => {
        this.result = data,
          this.resultUpdte = true;
        this.email = "";
      }
    )
  }

  bulkResult: boolean = false;
  emailList: any[];
  emails:string;
  bulkEmail(emailList: string){
    this.service.getBuilkEmail(emailList).subscribe(
      data => {
        this.emailList = data;
        this.emails = '';
        this.bulkResult = true;
      }
    )
  }

  bynamee:any;
  vaildEmail:any;
  buNStatus: boolean = false;
  byName(){
    this.bynamee = this.byname.value;
    console.log(this.bynamee)
    this.service.getByName(this.bynamee).subscribe(
      data =>{
        this.vaildEmail = data,
        this.buNStatus = true;
      }
    )
  }

}
