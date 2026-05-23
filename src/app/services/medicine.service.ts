import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = "http://localhost:9099/api/medicines";

  constructor(private httpClient: HttpClient) { }

  getMedicine(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }
  createMedicine(medicine:Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseUrl}`, medicine);
  }
  deleteMedicine(id:number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  getMedicineById(id: number): Observable<Medicine> {   
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }
  updateMedicine(id: number, medicine: Medicine): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, medicine);
  }
}