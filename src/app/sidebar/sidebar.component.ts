import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarModel } from './modal/modal.sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  @Output() ParentData:EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {  
  }

  sidebarItemClick(sidebarData:string){
    this.ParentData.emit(sidebarData);  
  }

  sidebarArray  :SidebarModel[] = [
  {title:'Items',icon:'./assets/items.png'},
  {title:'Tests',icon:'./assets/tests.png'},
  {title:'Test-Taker',icon:'./assets/test-taker.png'},
  {title:'Group',icon:'./assets/group.png'},
  {title:'Deliveries',icon:'./assets/deliveries.png'},
  {title:'Result',icon:'./assets/result.png'},
  ]
}
