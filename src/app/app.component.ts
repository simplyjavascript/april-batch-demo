import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "my-angular-classes-april";
  show = true;

  toggle() {
    this.show = !this.show;
  }
}
