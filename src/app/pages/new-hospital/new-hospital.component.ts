import { Component } from '@angular/core';
import { Hospital } from '../../core/models/hospital.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HospitalService } from '../../core/servives/hospital.service';
import { ApiResponse } from '../../core/interface/api-response';

@Component({
  selector: 'app-new-hospital',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-hospital.component.html',
  styleUrl: './new-hospital.component.css'
})
export class NewHospitalComponent {
  public hospitalObj: Hospital = new Hospital()

  constructor(private hospitalSrv: HospitalService){

  }

  onRegister(){
    this.hospitalSrv.registerHospital(this.hospitalObj).subscribe((res: ApiResponse)=>{
      if (res.result) {
        alert('Hospital registation Success')
      }else{
        alert(res.message)
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }
}
