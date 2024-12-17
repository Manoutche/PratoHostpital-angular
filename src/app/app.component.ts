import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from './core/models/user.model';
import { FormsModule } from '@angular/forms';
import { HospitalService } from './core/services/hospital.service';
import { ApiResponse } from './core/interface/api-response';
import { Hospital } from './core/models/hospital.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private hospitalSrv: HospitalService, private router: Router){
    const loggData = localStorage.getItem('practoLogin')
    if (loggData != null) {
      this.loggeHospital = JSON.parse(loggData)
    }else{
      this.router.navigateByUrl('home')
    }

  }
  public userObj: User = new User()
  public loggeHospital: Hospital = new Hospital()

  showLogin(){
    const modal = document.getElementById('loginModal')
    if (modal != null) {
      modal.style.display = 'block'
    }
  }
  closLogin(){
    const modal = document.getElementById('loginModal')
    if (modal != null) {
      modal.style.display = 'none'
    }
  }

  onLogin(){
    console.log(this.userObj);

    this.hospitalSrv.login(this.userObj).subscribe((res: ApiResponse)=>{

      if (res.result) {
        this.loggeHospital = res.data
        localStorage.setItem('practoLogin', JSON.stringify(res.data))
        this.closLogin()
      }else{
        alert(res.message)
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  logOut() {
    localStorage.removeItem('practoLogin')
    this.loggeHospital = new Hospital()
    this.router.navigateByUrl('home')
  }
}
