import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chiffre',
  templateUrl: './chiffre.component.html',
  styleUrls: ['./chiffre.component.css'],
})
export class ChiffreComponent implements OnInit {
  @Input() value: number = 0;
  @Output() changeValueEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  changeValue(x: number): void {
    this.value += x;
    this.value = this.value > 9 ? 0 : this.value;
    this.value = this.value < 0 ? 9 : this.value;

    this.changeValueEmitter.emit(this.value);
  }
}
