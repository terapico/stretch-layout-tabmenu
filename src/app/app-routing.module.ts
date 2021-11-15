import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimDetailComponent } from './components/claim-detail/claim-detail.component';
import { ClaimSearchComponent } from './components/claim-search/claim-search.component';

const routes: Routes = [
  {path: 'search', component: ClaimSearchComponent},
  {path: 'detail', component: ClaimDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
