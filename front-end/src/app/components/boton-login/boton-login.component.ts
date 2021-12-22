import { Component, OnInit } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { bindCallback } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent implements OnInit {
  logged=false
  value : String = '';
  constructor() {
    
  }
  

  ngOnInit(): void {
  }

  onLogin (){
    let logged = false
    if (!logged){
      Swal.fire({
        imageUrl: '/assets/candado.png',
        imageHeight: 100,
        imageWidth: 100,
        width: 1000,
        title : 'Iniciar Sesión',
        html:'Usuario:' + '<input id="swal-input1" class="swal2-input">' +
        'Contraseña:' + '<input id="swal-input2" class="swal2-input">',
        allowOutsideClick : false,
        focusConfirm: false,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#1b958e',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#af0303',
        heightAuto: true
      })}
    this.logged = true;
    window.localStorage.setItem('logged','true');
    console.log('logged');
  }


  onLogout(){
    this.logged = false;
    window.localStorage.removeItem('logged');
    console.log('deslogged');
  }


}

