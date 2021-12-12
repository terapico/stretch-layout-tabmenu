import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { of } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  items: MenuItem[] = [
    {label: 'Claim Search', routerLink: ['/search']},
    {label: 'Claim Detail', routerLink: ['/detail']},
    {label: 'Claim History', routerLink: ['/history']},
  ];

  activeItem: MenuItem = this.items[1];

  private subsink = new SubSink();

  constructor(private router: Router) {

  }

  ngOnInit() {

    this.subsink.sink = this.router.events.subscribe( event => {
      // console.log("Is NavEnd event: ", event instanceof NavigationEnd, " Event: ", event);
      if (event instanceof NavigationEnd) {
        console.log("Is NavEnd event: ", event instanceof NavigationEnd, " Event: ", event);
        
        const path = event.urlAfterRedirects;

        this.activeItem = this.items.find(item => item.routerLink[0] == path)??this.items[0];
      }
    });

    this.subsink.sink = of(2, 3, 4).subscribe();
  }

  ngOnDestroy(): void {
      this.subsink.unsubscribe();
  }
}
