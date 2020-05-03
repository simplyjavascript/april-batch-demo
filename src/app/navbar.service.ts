import { Injectable } from "@angular/core";
import { Movie } from "./movie.model";

@Injectable({
  providedIn: "root",
})
export class NavbarService {
  
  counter = 10;
  getCounter() {
    return this.counter;
  }
  setCounter(value) {
    this.counter = value;
  }
  navItems = [
    { id: 1, text: "Home", path: "/home" },
    { id: 2, text: "Gallery", path: "/gallery" },
    { id: 3, text: "Contact", path: "/contact" },
  ];
  constructor() {}
}
