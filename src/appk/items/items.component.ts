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

  ngOnInit(): void {
  }
items1Array:ItemsModal[]=[
  {icons:'bi bi-folder2-open',title:'New Class'},
  {icons:'bi bi-box-arrow-up',title:'Export'},
  {icons:'bi bi-folder-symlink-fill',title:'Move to'},
  {icons:'bi bi-files-alt',title:'Duplicate'},
  
];

items2Array:ItemsModal[]=[
  {icons:'bi bi-trash-fill',title:'Delete'},
  {icons:'bi bi-box-arrow-down',title:'Import'},
  {icons:'bi bi-journals',title:'New Item'},  
  {icons:'bi bi-files',title:'Copy to'},
];

}
