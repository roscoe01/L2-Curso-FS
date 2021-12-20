import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logged = false;
  constructor() { }

  ngOnInit(): void {
  }
  onLogin2(){
    this.logged = true;
    window.localStorage.setItem('logged','true');
  }
}
