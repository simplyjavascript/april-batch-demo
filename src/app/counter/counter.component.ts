import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../navbar.service";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
})
export class CounterComponent implements OnInit {
  count;
  constructor(private counterService: NavbarService) {}

  increment() {
    console.log("Incremented");
    this.count = this.count + 1;
    this.counterService.setCounter(this.count);
  }

  ngOnInit() {
    this.count = this.counterService.getCounter();
  }
}
