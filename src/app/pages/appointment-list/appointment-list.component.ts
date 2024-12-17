import { Component, OnInit } from '@angular/core';
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
export class AppointmentListComponent  implements OnInit {

  constructor(private appointmentSrv: AppointmentService) {

    const loggData = localStorage.getItem('practoLogin')
    if (loggData != null) {
      this.appointmentObj.hospitalId = JSON.parse(loggData).hospitalId
    }
  }
  appointmentObj: Appointment = new Appointment();
  appointmentList : Appointment [] = []

  ngOnInit(): void {
    this.getAllAppointments()
  }
  bookAppointemnt() {
    this.appointmentSrv.newAppointmentService(this.appointmentObj).subscribe((res: ApiResponse)=>{
      if (res.result) {
        alert('Appointment created')
        this.getAllAppointments()
      }else{
        alert(res.message)
      }
    })
  }

  getAllAppointments(){
    return this.appointmentSrv.getAppointmentByHospital(this.appointmentObj.hospitalId).subscribe((res: ApiResponse)=>{
      if (res.result) {
        this.appointmentList = res.data
      }else{
        alert(res.message)
      }
    })
  }

  retryAppointment(appoint: any) {
    return this.appointmentSrv.deleteAppointmentById(appoint).subscribe((res: ApiResponse)=>{
      if (res.result) {
        alert('Appointment deleted !')
        this.getAllAppointments()
      }else{
        alert(res.message)
      }
    })
  }
}
