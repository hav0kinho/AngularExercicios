import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  numberList = [];
  number = 0;
  showContent = false;

  addNumberInList(){
    this.numberList.push(this.number++);
  }

  toggleShowContent(){
    this.showContent = !this.showContent;
  }

  buttonClick(){
    this.addNumberInList();
    this.toggleShowContent();
  }
}
