import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-card',
  templateUrl: './quick-card.component.html',
  styleUrls: ['./quick-card.component.css']
})
export class QuickCardComponent implements OnInit {

  date = new Date().toDateString();

  @Input()
  id:string = '0'

  @Input()
  photoCover:string = ''

  @Input()
  cardTitle:string = ''

  @Input()
  cardDescription:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
