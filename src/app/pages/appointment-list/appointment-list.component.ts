import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../core/models/appointment.model';
import { AppointmentService } from '../../core/services/appointment.service';
import { ApiResponse } from '../../core/interface/api-response';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  constructor(private appointmentSrv: AppointmentService) {

    const loggData = localStorage.getItem('practoLogin')
    if (loggData != null) {
      this.appointmentObj.hospitalId = JSON.parse(loggData).hospitalId
    }
  }
  appointmentObj: Appointment = new Appointment();


  bookAppointemnt() {
    this.appointmentSrv.newAppointmentService(this.appointmentObj).subscribe((res: ApiResponse)=>{
      if (res.result) {
        alert('Appointment created')
      }else{
        alert(res.message)
      }
    })
}
}
