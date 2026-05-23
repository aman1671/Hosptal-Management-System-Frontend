import { Component } from '@angular/core';
import { Appointment } from '../services/appointment';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,private router:Router){}

  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppoinment();
    })
  }


  onSubmit(){
    this.saveAppointment();

  }
  goToAppoinment(){
    this.router.navigate(['/appointment-list'])
  }

}
