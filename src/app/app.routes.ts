import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HospitalListComponent } from './pages/hospital-list/hospital-list.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { NewHospitalComponent } from './pages/new-hospital/new-hospital.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch :'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path:'appointment',
    component: AppointmentListComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'hospital',
    component: HospitalListComponent
  },
  {
    path:'patient',
    component: PatientListComponent
  },
  {
    path:'new-hospital',
    component: NewHospitalComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

