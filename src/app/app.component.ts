import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from "./convert.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ConvertPipe]
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
  mileInput: number = 0;
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
  onMileChange(value:number){
    this.mileInput = value;
  }
}
