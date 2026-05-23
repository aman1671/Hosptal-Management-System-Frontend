import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "http://localhost:9099/api/appointments";

  constructor(private httpClient: HttpClient) { }
  
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment:Appointment): Observable<Appointment[]> {
    return this.httpClient.post<Appointment[]>(`${this.baseUrl}`,appointment);
  }

  deleteAppointment(id:number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}