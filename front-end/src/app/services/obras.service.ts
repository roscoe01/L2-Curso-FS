import { HttpClient } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Obra, Obras } from '../models/api-models';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {
  initialObras: Obra[] = [
  {
    "_id": "61bce502555401c8617f0cb7",
    "id": "1",
    "nombre": "NIENTE SENZA GIOIA",
    "descripcion": "Nada sin alegría, Collage técnica mixta sobre cartón francés",
    "tamaño": "65cm Alto x 51cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1rLQFMkyUJ-nRiy1UUm1K3RIMQ5ZDjCsH",
    "año": "2021",
    "coleccion": "Black and White"
  }, {
    "_id": "61bce502555401c8617f0cb8",
    "id": "2",
    "nombre": "Constelación en naranja",
    "descripcion": "Collage Técnica mixta sobre paspartou",
    "tamaño": "65cm Alto x 51cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1nM14Mp_Esv-9Usi5mUciCpouqz_0vnSt",
    "año": "2021",
    "coleccion": "Constelaciones"
  }, {
    "_id": "61bce502555401c8617f0cb9",
    "id": "3",
    "nombre": "El comienzo de todo",
    "descripcion": "Collage Técnica mixta sobre cartón francés",
    "tamaño": "70cm Alto x 60cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1STyIMbXZNfWEA8B6XoYjxOmxtAP3Tbpx        ",
    "año": "2021",
    "coleccion": "Vida"
  }, {
    "_id": "61bce502555401c8617f0cba",
    "id": "4",
    "nombre": "Bruma en interior",
    "descripcion": "Collage Técnica mixta sobre cartón francés",
    "tamaño": "65cm Alto x 60cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1-HRwbqkgvSLWaFgo3ccxpcsnaggsoWK9",
    "año": "2021",
    "coleccion": "Vida"
  }, {
    "_id": "61bce502555401c8617f0cbb",
    "id": "5",
    "nombre": "Sonido del Cosmos",
    "descripcion": "Técnica Mixta con acrílico, óxido de hierro, tintas, cartón, sobre cartón francés",
    "tamaño": "65cm Alto x 65cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1gJoHjed6VFFZrh8zoHs1YsWLA1w6y1S4",
    "año": "2021",
    "coleccion": "Constelaciones"
  }, {
    "_id": "61bce502555401c8617f0cbc",
    "id": "6",
    "nombre": "Visión Galáctica",
    "descripcion": "Técnicas Tradicional, tintas, acrílico, papeles varios sobre cartón francés",
    "tamaño": "70cm Alto x 65cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1Af7va3rpBPMtBWzzKNEAZov8ghA4u892",
    "año": "2021",
    "coleccion": "Constelaciones"
  }, {
    "_id": "61bce502555401c8617f0cbd",
    "id": "7",
    "nombre": "Los arlequines",
    "descripcion": "Técnica mixta, papeles varios, óxido de hierro, acrílico, tintas, sobre paspatou",
    "tamaño": "60cm Alto x 60cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1ovPDHIvhV9VDv0z23IptvIJH5LvPImYn",
    "año": "2021",
    "coleccion": "Vida"
  }, {
    "_id": "61bce502555401c8617f0cbe",
    "id": "8",
    "nombre": "Constelacion del Pez",
    "descripcion": "Técnica mixta sobre cartón francés",
    "tamaño": "70cm Alto x 60cm Ancho",
    "img": "https://drive.google.com/uc?export=view&id=1IyHdI6V-eAYhjJqVZuyV2Cdf33duE7DO",
    "año": "2021",
    "coleccion": "Constelaciones"
  }
  ];

  constructor(private http: HttpClient) {
  }
  
  obras$: BehaviorSubject<Obra[]> = new BehaviorSubject(this.initialObras);

  getObras() : Observable<Obras>{
    return this.http.get<Obras>(`${environment.baseUrl}obras`)
  }

  filterObras(text : string){
    const filteredObras = this.obras$.value.filter((obra)=> 
      obra.nombre.toLowerCase().includes(text.toLowerCase())
    );
      this.obras$.next(filteredObras);
  }

  getObra(id : number){
    return this.initialObras[id];
  }

  resetObras(){
    this.obras$.next(this.initialObras);
  }
  
}






//   getObra(id: number){
//     return this.obras[id];
//     }

//   filterObras(text:string){
//     this.filtered = this.obras.filter((obra) => obra.nombre.toLowerCase().includes(text.toLowerCase()));
//     console.log(this.filtered);
//   }
