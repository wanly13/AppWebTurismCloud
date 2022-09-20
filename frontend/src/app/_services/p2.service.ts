import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class P2Service {

  constructor(
    private http: HttpClient
  ) {}

  getPlaces(){
    return this.http.get<any>('http://localhost:3000/places');
  }

  getPlaceById(id: any){
    return this.http.get<any>(`http://localhost:3000/places/${id}`);
  }
}
