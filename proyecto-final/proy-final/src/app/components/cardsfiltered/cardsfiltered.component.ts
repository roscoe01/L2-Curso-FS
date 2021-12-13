import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-cardsfiltered',
  templateUrl: './cardsfiltered.component.html',
  styleUrls: ['./cardsfiltered.component.scss']
})
export class CardsfilteredComponent implements OnInit {

  obras : any[] = [];

  constructor(private obrasSvs: ObrasService) {

  }

  ngOnInit(): void {
  setTimeout(() => {this.obras = this.obrasSvs.filtered},250);
  }

}
