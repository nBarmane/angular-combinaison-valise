import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  digit1: number = 0;
  digit2: number = 0;
  digit3: number = 0;

  changeValue(digit: number, $event): void {
    if (digit == 1) this.digit1 = $event;
    if (digit == 2) this.digit2 = $event;
    if (digit == 3) this.digit3 = $event;
  }
}
