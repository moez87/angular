import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud2-list',
  templateUrl: './crud2-list.component.html',
  styleUrls: ['./crud2-list.component.css']
})
export class Crud2ListComponent implements OnInit {

  crud2:any;
  searchText:any;
  constructor() { }

  ngOnInit(): void {
  }

}
