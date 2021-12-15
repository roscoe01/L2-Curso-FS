import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CardsfilteredComponent } from './components/cardsfiltered/cardsfiltered.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'obras',
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
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }
  ,
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
