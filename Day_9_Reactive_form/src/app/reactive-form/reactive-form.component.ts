import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm : FormGroup;

  Gender:Array<any>=["Male","Female","Others"]
  constructor(private users: FormBuilder) {
    this.registerForm = this.users.group({
      uname: ['', [Validators.required,Validators.minLength(5),Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     Gender :['',[Validators.required]]
  });
    
   }

  ngOnInit(): void {
  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    console.log(this.registerForm);
    
}
}
