import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:UserViewModel = {
    email:'',
    name:'',
    surname:'',
    address:'',
    tel:'',
    password:''
  };
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  sendUser():void{
    alert(this.model.name);
    let url = "http://localhost:8080/user/add";
    this.http.post(url, this.model).subscribe(
      res =>{
        location.reload();
      },
      error1 => {
        alert("An error has recured while sending User");
      }
    )
  }

}

export interface UserViewModel{
  email:string;
  name:string;
  surname:string;
  address:string;
  tel:string;
  password:string;
}
