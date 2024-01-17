import { Component } from "@angular/core";

@Component({
 selector: "app-danger",
 template: `
  <div>
    <strong>This is a danger alert!</strong>
  </div>
 `,
 styles: `
  div{
    background-color: orange;
    margin: 10px 0;
    padding: 20px;
    color: white;
  }
 `,
})
export class DangerComponent{

}
