import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  inputFirstName;
  inputLastName;
  inputNumber;
  inputEmail;
  inputPassword;
  profileImage;
  constructor(public appService:AppService, public toastr:ToastrService, public router:Router) { }

  ngOnInit() {

    console.log('Signup component called')
  }

  goToLogin(){

    this.router.navigate(['/login'])
  }

  public signUp(){

    let userData = {
      firstName:this.inputFirstName,
      lastName:this.inputLastName,
      email:this.inputEmail,
      mobile:this.inputNumber,
      password:this.inputPassword,
      image:this.profileImage
    }
    console.log(userData)
   this.appService.createNewUser(userData).subscribe(
    (apiResponse)=>{
      if(apiResponse.status===200){
        console.log('User Created successfully')
        this.toastr.success('User Created successfully')
        console.log(apiResponse.data)
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 2000);
        
      }
      else{
        console.log('Some error occured')
        this.toastr.error('Unable to create User')
      }
    },
    (err)=>{
      console.log(err);
     this.toastr.error('Some error occured with connection')
    }
  )
  }
}
