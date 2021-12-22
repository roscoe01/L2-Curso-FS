import { Component, OnInit } from '@angular/core';
import { Obra} from 'src/app/models/api-models';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  obras : Obra[] = [];

  constructor(private obrasSvs: ObrasService) {
    // this.obras = this.obrasSvs.obras;
    this.obrasSvs.getObras().subscribe((resp)=> {
      console.log("Respuesta del endpoint desde el componente: ", resp);
      this.obras = resp;
    });
  }




  ngOnInit(): void {}

  navigate() {
    console.log('click');
   }

}


