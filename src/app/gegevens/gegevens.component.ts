import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gegevens',
  templateUrl: './gegevens.component.html',
  styleUrls: ['./gegevens.component.css']
})
export class GegevensComponent implements OnInit {

  style: string |undefined;

  constructor() {this.style = 'begin'; }
  submit() {
    this.style = 'change';

  }
  ngOnInit(): void {
  }

  naam: string = "";
  voornaam: string = "";
  leeftijd: number = 1; 
  functie: string ="";
}
