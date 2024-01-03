import { Component } from '@angular/core';
import { RegistrationServiceService } from '../inscription-service.service';
import { Users } from '../Users';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  msg=''
   user = new Users();
      constructor(private service:RegistrationServiceService,private router:Router){}
      loginuser(){
        this.service.loginuserfromremote(this.user).subscribe(
          data => {   console.log("Response received in component:", data);
          const userId = data.id; 
          console.log("userId:", userId);
          this.router.navigate(['/user', userId]);},
          error => {console.log("exception"),
         this.msg='bad request,enter correct email and password'}
          )
        
      }
      Goregister(){
         this.router.navigate(['/registration']);
      }
      GoHome(){
       
        this.router.navigate(['/']);
      }
}
