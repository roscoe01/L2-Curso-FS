import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() obra:any = {};

  @Input('index') i: number = 0;

  @Output() clickCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    console.log('click');
  }


}
