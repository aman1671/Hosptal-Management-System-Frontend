import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientsComponent } from './create-patients/create-patients.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    HomeComponent,
    CreateAppointmentComponent,
    DocdashComponent,
    CreatePatientsComponent,
    ViewMedicineComponent,
    MedicinelistComponent,
    CreateMedicineComponent,
    AdloginComponent,
    DocloginComponent,
    ViewPatientsComponent,
    UpdateMedicineComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }