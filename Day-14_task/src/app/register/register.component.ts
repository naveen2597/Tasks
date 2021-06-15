import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import {UserService} from 'src/app/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
gend = ["Male","Female","Others"]
  constructor(private formbulider:FormBuilder,private ruser:UserService) { 
        this.registerForm=this.formbulider.group({
        uname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
        lname:['',Validators.required],
        password:['',[Validators.required,Validators.minLength(6)]],
        email:['',[Validators.required,Validators.email]],
        pnum:['',Validators.required],
        gender:[this.gend[0],Validators.required]


        });

  }
  get f(){
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    
  }
  onSubmit(data:any){
    console.log(data.value);
    this.ruser.users.push(data.value);

    

  }
 

}
