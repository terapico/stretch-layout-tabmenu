import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimSearchComponent } from './components/claim-search/claim-search.component';
import { ClaimDetailComponent } from './components/claim-detail/claim-detail.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    ClaimSearchComponent,
    ClaimDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
