import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  obra: any;
  constructor(
      private actRoute: ActivatedRoute, 
      private obrasSvc: ObrasService) 
      {
      this.actRoute.params.subscribe( params => {
      this.obra = this.obrasSvc.getObra(params['id']);
      console.log(this.obra);      
    });
  }

  ngOnInit(): void {}
 
}
