import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.resposive.component.css']
})
export class MenuBarComponent implements OnInit {
  user:string = 'T'

  constructor() { }

  ngOnInit(): void {
  }

}
