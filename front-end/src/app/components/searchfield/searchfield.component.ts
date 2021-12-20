import { Component, OnInit } from '@angular/core';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {
  search: string = '';
  clear: boolean = false;

  constructor(private obrasSv: ObrasService) { }

  ngOnInit(): void {
  }

  filter($event:any){
    $event.preventDefault();
    this.obrasSv.filterObras(this.search.trim());
    this.search = '';
    this.clear = true;
  }

  onClear(){
    this.obrasSv.resetObras();
    this.clear = false;

  }
}
