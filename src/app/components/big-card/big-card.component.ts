import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDescription:string = '';
  @Input()
  id:string = '0';

  date = new Date().toDateString();


  constructor() { }


  ngOnInit(): void {
  }

}
