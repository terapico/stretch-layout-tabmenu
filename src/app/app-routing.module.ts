import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimDetailComponent } from './components/claim-detail/claim-detail.component';
import { ClaimHistoryComponent } from './components/claim-history/claim-history.component';
import { ClaimSearchComponent } from './components/claim-search/claim-search.component';

const routes: Routes = [
  {path: '', redirectTo: 'detail', pathMatch: 'full'},
  {path: 'search', component: ClaimSearchComponent},
  {path: 'detail', component: ClaimDetailComponent},
  {path: 'history', component: ClaimHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
