import { Component, OnInit } from '@angular/core';
import { TypeServiceService } from '../type-service.service';
import { Type } from '../type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editype',
  templateUrl: './editype.component.html',
  styleUrls: ['./editype.component.css']
})
export class EditypeComponent implements OnInit {

  type!:Type;

  constructor(private typeService:TypeServiceService, private router:Router) { }

  ngOnInit(): void {

    this.type = this.typeService.typeEdit;

  }
  
  onSubmit(){

    this.typeService.save(this.type).subscribe(result => this.gotoTypeList());

  }

  gotoTypeList(){

    this.router.navigate(['/types']);

  }

}
