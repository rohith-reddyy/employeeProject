import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,Validators,FormGroup} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.userForm=this.formBuilder.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  onSubmit(){

  }
}
