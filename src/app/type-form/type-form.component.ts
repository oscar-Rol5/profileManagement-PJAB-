import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  type:Type;

  constructor( private route:ActivatedRoute, private router:Router, private typeService:TypeServiceService) {

    this.type = new Type();

  }

  ngOnInit(): void {

    
  }

  onSubmit(){

    this.typeService.save(this.type).subscribe(result => this.gotoTypeList());

  }

  gotoTypeList(){

    this.router.navigate(['/types']);

  }

}
