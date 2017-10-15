import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Baskar!';
  email='baskarf@gmail.com';
  address={
    street:'2403 sw first avenue',
    city:'Boston',
    state:'MA'
  }
}
