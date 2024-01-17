import { Component } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrl: './databiding.component.css'
})
export class DatabidingComponent {
  username = "";

  resetInput(){
    this.username = "";
  }
}
