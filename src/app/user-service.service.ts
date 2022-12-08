import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private usersUrl:string;

  public user1!:User;

  constructor(private http:HttpClient) {

    this.usersUrl = 'http://localhost:8080/users';

  }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user:User){
    return this.http.post<User>(this.usersUrl, user, {responseType: 'text' as 'json'});
  }
  
  public delete(user:User){
    console.log("Vas por aqui")
    console.log(user)
    return this.http.post<User>(this.usersUrl + "d", user, {responseType: 'text' as 'json'});
  }

  edit(user:User){

    this.user1 = user;
    console.log(this.user1)
    console.log("El user1 del service en el service")
      
  }

  /*change(userN:User, userC:User){

    //this.usersM.push(userN, userC);

    console.log(userN.fname + "este es el user N")
    console.log(userC.fname + "este es el user C")

    return this.http.post<User>(this.usersUrl + "d", userN, {responseType: 'text' as 'json'});

  }*/

}
