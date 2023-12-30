import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameInput: string = '';
  dateInput: string = '';
  amountInput: string = '';
  heightInput: number = 0;
  car = {
    model : "BMW",
    year : 2018,
    type : "s500"
  }
  onNameChange(value: string) {
    this.nameInput = value;
  }
  onDateChange(value: string) {
    this.dateInput = value;
  }
  onAmountChange(value: string) {
    this.amountInput = value;
  }
  onHeightChange(value: number) {
    this.heightInput = value;
  }
}
