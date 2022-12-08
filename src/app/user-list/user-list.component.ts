import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../type';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { TypeServiceService } from '../type-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  types!:Type[];

  user1!:User;
  selected!:User;

  condition:boolean = false;

  constructor(private userService:UserServiceService, private typeService:TypeServiceService, private router:Router,) { }

  ngOnInit() {

    this.userService.findAll().subscribe(data => {this.users = data })
    this.typeService.findAll().subscribe(data => {this.types = data })

    //this.user1 = this.users[0];

  }
  
  delete(user:User){

    this.userService.delete(user).subscribe(result => this.router.navigate(['/users']));
    this.users.slice(this.users.indexOf(user))
    window.location.reload();

  }

  modify(user:User){

    this.userService.edit(user);

    this.userService.user1 = user;

    this.router.navigate(['/edituser'])

  }

  sortName(){

    this.users = this.users.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  }

  sortFname(){

    this.users = this.users.sort((a,b) => (a.fname > b.fname) ? 1 : ((b.fname > a.fname) ? -1 : 0))

  }

  sortEmail(){

    this.users = this.users.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0))

  }

  sortType(){

    this.users = this.users.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0))

  }

  assign(user:User){

    this.condition = true

    this.selected = user;

  }

  infoF(){

    alert("With this option, you can create, edit or delete users. You can also sort users by clicking on each of the sort criteria. At last, you can view more information of the user by clicking in his name ")

  }

}
