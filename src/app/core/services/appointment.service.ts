import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { environment } from '../../../environments/environment';
import { Constant } from '../contant/Constant';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(private http: HttpClient) { }

  newAppointmentService(obj:Appointment):Observable<ApiResponse> {
    return this.http.post<ApiResponse> (environment.api_url + Constant.API_END_POINT.NEW_APPOINTMENT,obj)
  }

  getAppointmentByHospital(id: number): Observable <ApiResponse> {
    return this.http.get<ApiResponse>(environment.api_url + Constant.API_END_POINT.APPOINTMENT_BY_HOSPITAL+ id)
  }

  deleteAppointmentById(appoint: any): Observable <ApiResponse> {
    return this.http.delete<ApiResponse>(environment.api_url + Constant.API_END_POINT.DEL_APPOINTMENT+appoint)
  }
}
