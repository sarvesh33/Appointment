import { Appointments } from './../models/appointments';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  ngOnInit(): void {
    let savedAppointments = localStorage.getItem('Appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointments[] = [];

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointments = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem('Appointments', JSON.stringify(this.appointments));
    }
  }
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('Appointments', JSON.stringify(this.appointments));
  }
}
