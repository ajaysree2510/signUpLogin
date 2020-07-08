import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name;

  constructor(public router:Router, public Cookie:CookieService, public toastr:ToastrService) { }

  ngOnInit(): void {
    this.name = this.Cookie.get('name')
  }

  logout(){
    console.log('Logout Successful')
    this.Cookie.deleteAll()
    this.toastr.info('Logged out Successfully')

    setTimeout(()=>{
      this.router.navigate(['/login'])
    },3000)
  }

}
