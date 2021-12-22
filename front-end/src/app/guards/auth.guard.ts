import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let logged = window.localStorage.getItem('logged');   
    if (logged){
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Tenés que iniciar sesión primero antes de poder ver los detalles de la obra',
        allowOutsideClick : false,
        confirmButtonText: 'Aceptar'

      })
      return false;
    }
  } 
}
