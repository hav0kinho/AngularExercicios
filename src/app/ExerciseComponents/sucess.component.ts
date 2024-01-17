import { Component } from "@angular/core";

@Component({
  selector: "app-sucess",
  template: `
    <div>
      <strong>Okay! Everything had a sucess :D</strong>
    </div>
  `,
  styles: `
    div{
      background-color: green;
      margin: 10px 0;
      padding: 20px;
      color: white;
    }
  `
})
export class SucessComponent{

}
