import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Type } from '../type';
import { UserServiceService } from '../user-service.service';
import { TypeServiceService } from '../type-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user:User;
  types!:Type[];

  constructor( private route:ActivatedRoute, private router:Router, private userService:UserServiceService, private typeService:TypeServiceService) {

    this.user = new User();

  }

  ngOnInit(): void {

    this.typeService.findAll().subscribe(data => {this.types = data })

  }

  onSubmit(){

    this.userService.save(this.user).subscribe(result => this.gotoUserList());

  }

  gotoUserList(){

    this.router.navigate(['/users']);

  }

}
