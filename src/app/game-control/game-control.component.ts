import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  ref: any;
  @Output() countIncremented = new EventEmitter<number>();
  @Output() gameReseted = new EventEmitter();


  onStartGame(){
    let count = 0;

    this.ref = setInterval(() => {
      count++;
      this.countIncremented.emit(count);
    }, 1000); // Incrementa o counter a cada 1s e emite esse dado.
  }

  onStopGame(){
    clearInterval(this.ref);
  }

  onResetGame(){
    clearInterval(this.ref);
    this.gameReseted.emit();
  }
}
