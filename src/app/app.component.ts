import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [
    {label: 'Claim Search', routerLink: ['search']},
    {label: 'Claim Detail', routerLink: ['detail']},
    {label: 'Claim History', routerLink: ['history']},
  ];

  activeItem: MenuItem = this.items[1];

  ngOnInit() {

  }
}
