import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  togglePokemon: boolean = true;

  constructor() {
    this.title = 'Karen';
  }
}
