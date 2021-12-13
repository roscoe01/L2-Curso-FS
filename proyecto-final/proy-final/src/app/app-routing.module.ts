import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardsfilteredComponent } from './components/cardsfiltered/cardsfiltered.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'home',
    component: CardsComponent
  },
  {
    path: 'filtered',
    component: CardsfilteredComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
