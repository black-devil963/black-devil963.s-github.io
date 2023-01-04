import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemsModal } from './modal/modal.items';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }
  selected ="";
  ngOnInit(): void {
  }
  ItemClick(select:any){
    console.log(select);
    this.selected = select;
   }
items1Array :ItemsModal[] = [
  {title:'New Class',icons:'./assets/New-Class.png'},
  {title:'Export',icons:'./assets/Export.png'},
  {title:'Move to',icons:'./assets/Move-to.png'},
  {title:'Duplicate',icons:'./assets/Duplicate.png'}
  ];

items2Array:ItemsModal[]=[
  {icons:'./assets/Delete.png',title:'Delete'},
  {icons:'./assets/Import.png',title:'Import'},
  {icons:'./assets/New-Item.png',title:'New Item'},  
  {icons:'./assets/Copy-to.png',title:'Copy to'},
];

}
