import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
import { Cookie, CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputPassword;
  inputEmail;
  constructor(public appService:AppService, public toastr:ToastrService, public Cookie:CookieService, public router:Router) { }

  ngOnInit() {
console.log('Login Component called')
  }


  goToSignup(){
    this.router.navigate(['/signup'])
  }
  login(){

    

    let userData = {
      email:this.inputEmail,
      password:this.inputPassword
    }

    this.appService.loginUser(userData).subscribe(
    (apiResponse)=>{
      if(apiResponse.status===200){

        console.log(apiResponse.data)
        Cookie.set('authtoken', apiResponse.data.authToken)
        Cookie.set('userid', apiResponse.data.userDetails.userId)
        Cookie.set('name', apiResponse.data.userDetails.firstName+' '+apiResponse.data.userDetails.lastName)
        this.toastr.success('Logged in Successfully')
        this.router.navigate(['/profile'])
      }
      else{
        this.toastr.error('Some error occured , unable to save')
      }
      
    },
    (err)=>{
      console.log(err);
      this.toastr.error('Some connection error occured , unable to save')
    }
    )
    console.log(userData)
  }
}
