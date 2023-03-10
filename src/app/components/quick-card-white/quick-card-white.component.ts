import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-card-white',
  templateUrl: './quick-card-white.component.html',
  styleUrls: ['./quick-card-white.component.css', './quick-card-white.responsive.css']
})
export class QuickCardWhiteComponent implements OnInit {

  date = new Date().toDateString();

  @Input()
  id:string = '0'

  @Input()
  corLetra:string = 'white'

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
