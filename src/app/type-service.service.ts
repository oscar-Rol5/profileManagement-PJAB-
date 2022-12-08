import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from './type';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  private typesUrl:string;

  public typeEdit!:Type;

  constructor(private http:HttpClient) {

    this.typesUrl = 'http://localhost:8080/types';

  }

  public findAll(): Observable<Type[]>{
    return this.http.get<Type[]>(this.typesUrl);
  }
  
  public save(type:Type){
    return this.http.post<Type>(this.typesUrl, type, {responseType: 'text' as 'json'});
  }

  public delete(type:Type){
    return this.http.post<Type>(this.typesUrl + "d", type, {responseType: 'text' as 'json'});
  }

}
