import { Component } from '@angular/core';
import { Patient } from '../services/patient';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent {

  patient:Patient = new Patient();

  constructor(private patientService:PatientService,private router:Router){


  }
  savepatients(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientlist();
    })

  }
  onSubmit(){
    this.savepatients();

  }
  goToPatientlist(){
    this.router.navigate(['/docdash'])
  }


}
