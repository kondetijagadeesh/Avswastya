import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm! : FormGroup;
  constructor(private router : Router) { }

  ngOnInit(): void {
     this.userForm = new FormGroup( {
      name : new FormControl("", Validators.required),
      password : new FormControl('', Validators.required)
    })
  }
  logindetials(){
     alert("hello world")
  }
      
  }


