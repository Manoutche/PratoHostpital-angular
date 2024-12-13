import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../contant/Constant';
import { Hospital } from '../models/hospital.model';
import { ApiResponse } from '../interface/api-response';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  login(obj:User): Observable <ApiResponse>{
    return this.http.post<ApiResponse>(environment.api_url+Constant.API_END_POINT.LOGIN, obj)
  }

  registerHospital(obj: Hospital): Observable <ApiResponse> {
    return this.http.post<ApiResponse>(environment.api_url + Constant.API_END_POINT.ADD_NEW_HOSPITAL, obj)
  }
}
