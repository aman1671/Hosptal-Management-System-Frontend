import { Component } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { Medicine } from '../services/medicine';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {
  medicines:Medicine[] = [];

  constructor(private medicineService:MedicineService){

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

  }

}
