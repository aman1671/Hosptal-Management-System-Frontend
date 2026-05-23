import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthService } from './adminauth.service';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthguardService } from './doctorauthguard.service';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [
  {path:'admin',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'admindash',component:AdmindashComponent,canActivate:[AdminauthguardService]},
  {path:'home',component:HomeComponent},
  {path:'appointment-list',component:AppointmentComponent,canActivate:[DoctorauthguardService]},
  {path:'create-appointment',component:CreateAppointmentComponent,canActivate:[DoctorauthguardService]},
  {path:'view-patients', component:ViewPatientsComponent,canActivate:[DoctorauthguardService]},
  {path:'home',component:HomeComponent,},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'docdash',component:DocdashComponent,canActivate:[DoctorauthguardService]},
  {path:'create-patient',component:CreatePatientsComponent,canActivate:[DoctorauthguardService]},
  {path:'view-medicine', component:ViewMedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'medicine-list',component:MedicinelistComponent,canActivate:[DoctorauthguardService]},
  {path:'create-medicine',component:CreateMedicineComponent,canActivate:[DoctorauthguardService]},
  {path:'update-medicine/:id,',component:UpdateMedicineComponent},
  {path:'doclogin',component:DocloginComponent},
  {path:'adlogin',component:AdloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
