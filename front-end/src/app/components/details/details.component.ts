import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obra } from 'src/app/models/api-models';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  obra : any;
  constructor(
      private actRoute: ActivatedRoute, 
      private obrasSvc: ObrasService) 
      {
      this.actRoute.params.subscribe( params => {
      const obra = this.obrasSvc.getObra(params['id']);
      this.obra = {
        nombre: obra.nombre,
        descripcion: obra.descripcion,
        size: obra.tamaño,
        img: obra.img,
        year: obra.año,
        coleccion: obra.coleccion
      }
      console.log(this.obra);
    });
  }

  ngOnInit(): void {}
 
}
