import { Component } from '@angular/core';
import { Medicine } from '../services/medicine';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {
  medicine:Medicine=new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineService){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
  }


  onSubmit(){
    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
     console.log(data);
    })

  }

}
