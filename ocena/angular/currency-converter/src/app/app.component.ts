import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './app.component.html',
})
export class AppComponent {
  amountPLN: number = 0;
  amountEUR: number | null = null;
  title = 'ZAMIANA WALUT'; 

  constructor() {}

  convertCurrency() {
   
    this.amountEUR = parseFloat((this.amountPLN / 4.2).toFixed(2))
      
    console.log('Przeliczona kwota EUR:', this.amountEUR);
  }
}
