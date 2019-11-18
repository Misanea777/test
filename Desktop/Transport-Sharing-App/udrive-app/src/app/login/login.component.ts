import { Component, OnInit } from '@angular/core';
import {UserViewModel} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:UserViewModel = {
    email:'',
    name:'',
    surname:'',
    address:'',
    tel:'',
    password:''
  };
  constructor() { }

  ngOnInit() {
  }

}


