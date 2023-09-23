import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title: string = 'Template Reference Variable';
  phone: string = '';

  constructor() {}

  callPhone(value: any) {
    console.log(value);
  }
}
