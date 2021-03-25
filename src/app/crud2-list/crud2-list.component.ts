import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-crud2-list',
  templateUrl: './crud2-list.component.html',
  styleUrls: ['./crud2-list.component.css']
})
export class Crud2ListComponent implements OnInit {
 

  @Input() crud2:any;
  @Output() updateEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  UpdateCrud(i){
    this.updateEvent.emit(i)
  }

  deleteUpdatedCrud(i){
  this.deleteEvent.emit(i)
  }
}
