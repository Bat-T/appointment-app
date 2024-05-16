import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  

  public newAppointmentTitle : string = "";
  public newAppointmentDate : Date = new Date();
  appointments :Appointment[] = [];

  ngOnInit(): void {
    let storageAppointment = localStorage.getItem("appointments");
    this.appointments = storageAppointment ? JSON.parse(storageAppointment) : [];
  }
  addAppointment()
  {
    if (this.newAppointmentDate != null || this.newAppointmentTitle != ""){
      let newAppointment: Appointment = {
        id : Date.now(),
        date : this.newAppointmentDate,
        name: this.newAppointmentTitle
      }
      this.appointments.push(newAppointment);
      //alert("Appointments added"+this.newAppointmentTitle+" "+this.newAppointmentDate);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments",JSON.stringify(this.appointments));
    }
    
  }

  deleteAppointment(index:number)
  {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments));
  }
  
}
