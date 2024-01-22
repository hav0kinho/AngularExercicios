import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];


  onCountIntervalTrigged(count: number){
    console.log("Contagem em: " + count)
    if(count % 2 == 0)
    {
      this.oddNumbers.push(count);
    }
    else
    {
      this.evenNumbers.push(count);
    }
  }

  onGameResetTrigged(){
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
}
