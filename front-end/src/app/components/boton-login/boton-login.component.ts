import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-login',
  templateUrl: './boton-login.component.html',
  styleUrls: ['./boton-login.component.scss']
})
export class BotonLoginComponent implements OnInit {
  logged=false
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
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
