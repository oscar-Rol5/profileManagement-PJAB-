import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../type';
import { TypeServiceService } from '../type-service.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.css']
})
export class TypeListComponent implements OnInit {

  types!: Type[];

  constructor(private typeService:TypeServiceService, private router:Router) { }

  ngOnInit() {

    this.typeService.findAll().subscribe(data => {this.types = data })

  }

  modify(typeName:Type){

    this.typeService.typeEdit = typeName;

    this.router.navigate(['/editype']);

  }

  delete(type:Type){

    this.typeService.delete(type).subscribe(result => this.router.navigate(['/types']));
    this.types.slice(this.types.indexOf(type))
    window.location.reload();

  }

  sortId(){

    this.types = this.types.sort((a, b) => Number(b.id) - Number(a.id));

  }

  sortType(){

    this.types = this.types.sort((a,b) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0))

  }

}
