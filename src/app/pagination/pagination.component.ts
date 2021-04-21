import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  cp: number = 1;
  data: any = [
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
    { itemName: 'toothpase' },
    { itemName: 'salt' },
    { itemName: 'sugar' },
    { itemName: 'oil' },
  ];
  constructor() { }

  ngOnInit(): void {
  }



}
