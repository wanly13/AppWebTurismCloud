import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http:HttpClient
  ) { }

  getCommentsByPlaceID(id: any){
    return this.http.get<any>(`http://localhost:3000/comments/${id}`);
  }
}