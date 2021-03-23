import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  crud = JSON.parse(localStorage.getItem('crud') || '[]');
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(i){
    this.crud.splice(i, 1);
    localStorage.setItem('crud', JSON.stringify(this.crud))
  }

}
