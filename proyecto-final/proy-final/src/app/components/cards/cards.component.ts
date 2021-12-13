import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  obras : any[] = [];

  constructor(private obrasSvs: ObrasService) {
    this.obras = this.obrasSvs.obras;
  }

  ngOnInit(): void {}

  navigate() {
    console.log('click');
   }

}


