import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card.responsive.css']
})
export class SmallCardComponent implements OnInit {

  date = new Date().toDateString();

  @Input()
  id:string = '0'

  @Input()
  photoCover:string = ''

  @Input()
  cardTitle:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
