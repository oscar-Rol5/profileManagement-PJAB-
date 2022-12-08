import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
 
  user:User = this.userService.user1;
  userC!:User;
  types!:Type[];

  constructor(private userService:UserServiceService, private typeService:TypeServiceService, private router:Router) { }

  ngOnInit(): void {
    this.user.name = this.userService.user1.name
    this.user = this.userService.user1;
    console.log(this.user)
    console.log("user del oninit del editform")
    this.typeService.findAll().subscribe(data => {this.types = data })
  
  }

  onEdit(){

    //this.userService.change(this.user, this.userService.user1).subscribe(result => this.router.navigate(['/users']));
    console.log(this.user)
    console.log("user del Onedit del edit form")
    console.log(this.userService.user1)
    this.userService.delete(this.user)
    this.userService.save(this.user).subscribe(result => this.router.navigate(['/users']));


  }

}
