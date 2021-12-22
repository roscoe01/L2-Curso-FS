import { Component, OnInit } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  title = 'sweetAlert';

  constructor() { }

  ngOnInit(): void {
  }

  showModal(){
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado!',
      text: 'Nos comunicaremos contigo lo antes posible.',
      allowOutsideClick : false,
      confirmButtonText: 'Aceptar'
    })

}}
