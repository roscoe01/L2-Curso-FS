import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {
  obras: any[] = [
      {
          "id": "1",
          "nombre": "NIENTE SENZA GIOIA",
          "descripcion": "Nada sin alegría, Collage técnica mixta sobre cartón francés",
          "tamanio" : "65cm Alto x 51cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1rLQFMkyUJ-nRiy1UUm1K3RIMQ5ZDjCsH",
          "anio": "2021",
          "coleccion": "Black and White"
      },
      {
          "id": "2",
          "nombre": "Constelación en naranja",
          "descripcion": "Collage Técnica mixta sobre paspartou",
          "tamanio" : "65cm Alto x 51cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1nM14Mp_Esv-9Usi5mUciCpouqz_0vnSt",
          "anio": "2021",
          "coleccion": "Constelaciones"
      },
      {
          "id": "3",
          "nombre": "El comienzo de todo",
          "descripcion": "Collage Técnica mixta sobre cartón francés",
          "tamanio" : "70cm Alto x 60cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1STyIMbXZNfWEA8B6XoYjxOmxtAP3Tbpx        ",
          "anio": "2021",
          "coleccion": "Vida"
      },
      {
          "id": "4",
          "nombre": "Bruma en interior",
          "descripcion": "Collage Técnica mixta sobre cartón francés",
          "tamanio" : "65cm Alto x 60cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1-HRwbqkgvSLWaFgo3ccxpcsnaggsoWK9",
          "anio": "2021",
          "coleccion": "Vida"
      },
      {
          "id": "5",
          "nombre": "Sonido del Cosmos",
          "descripcion": "Técnica Mixta con acrílico, óxido de hierro, tintas, cartón, sobre cartón francés",
          "tamanio" : "65cm Alto x 65cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1gJoHjed6VFFZrh8zoHs1YsWLA1w6y1S4",
          "anio": "2021",
          "coleccion": "Constelaciones"
      },
      {
          "id": "6",
          "nombre": "Visión Galáctica",
          "descripcion": "Técnicas Tradicional, tintas, acrílico, papeles varios sobre cartón francés",
          "tamanio" : "70cm Alto x 65cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1Af7va3rpBPMtBWzzKNEAZov8ghA4u892",
          "anio": "2021",
          "coleccion": "Constelaciones"
      },
      {
          "id": "7",
          "nombre": "Los arlequines",
          "descripcion": "Técnica mixta, papeles varios, óxido de hierro, acrílico, tintas, sobre paspatou",
          "tamanio" : "60cm Alto x 60cm Ancho",
          "img": "https://drive.google.com/file/d/1ovPDHIvhV9VDv0z23IptvIJH5LvPImYn/view?usp=sharing",
          "anio": "2021",
          "coleccion": "Vida"
      },
      {
          "id": "8",
          "nombre": "Constelacion del Pez",
          "descripcion": "Técnica mixta sobre cartón francés",
          "tamanio" : "70cm Alto x 60cm Ancho",
          "img": "https://drive.google.com/uc?export=view&id=1IyHdI6V-eAYhjJqVZuyV2Cdf33duE7DO",
          "anio": "2021",
          "coleccion": "Constelaciones"
      }
  ];

  filtered: any[] = [];

  constructor() { }

  getObra(id: number){
    return this.obras[id];
    }

  filterObras(text:string){
    this.filtered = this.obras.filter((obra) => obra.nombre.toLowerCase().includes(text.toLowerCase()));
    console.log(this.filtered);
  }
}
