import { Component } from '@angular/core';
import { Medicine } from '../services/medicine';
import { MedicineService } from '../services/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent {
  medicines:Medicine[]=[];


  constructor(private medicineService:MedicineService,private router:Router){

  }
  ngOnInit():void{
    this.getMedicine();

  }
  getMedicine(){
    this.medicineService.getMedicine().subscribe(data=>{
     this.medicines=data;
    })
  }
  update(id:number){
  this.router.navigate(['update-medicine',id])

}

}

