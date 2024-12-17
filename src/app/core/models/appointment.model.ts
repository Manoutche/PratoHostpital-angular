export class Appointment {

  name: string;
  mobileNo: string;
  city: string;
  age: number;
  gender: string;
  appointmentDate: Date;
  appointmentTime: string;
  isFirstVisit: boolean;
  naration: string;
  hospitalId: number;
  appointmentId: number;

  constructor() {
    this.name = ''
    this.mobileNo = ''
    this.city = ''
    this.age =0
    this.gender =''
    this.appointmentDate = new Date()
    this.appointmentTime =''
    this.isFirstVisit =false
    this.naration =''
    this.hospitalId =0
    this.appointmentId =0
  }
}
