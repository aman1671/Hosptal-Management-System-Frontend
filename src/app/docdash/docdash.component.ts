import { Component } from '@angular/core';
import { Patient } from '../services/patient';
import { PatientService } from '../services/patient.service';
import { DocauthService } from '../docauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
  constructor(private patientService: PatientService,private docauth:DocauthService,private router:Router){}
  patients:Patient[]=[];

  ngOnInit():void{
    this.getPatients();

  }

  getPatients(){
    this.patientService.getPatientslist().subscribe(data=>{
      this.patients=data;
    })
  }
  logout(){
    this.docauth.logout();
    this.router.navigate(['home'])
   
  }
  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data)
    })

  }

}
