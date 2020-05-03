import { Component, OnInit } from "@angular/core";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { NavbarService } from "../navbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  faFilm = faFilm;
  isAdmin = true;
  navItems = [
    { id: 1, text: "Home", path: "/home" },
    { id: 2, text: "Gallery", path: "/gallery" },
    { id: 3, text: "Contact", path: "/contact" },
  ];

  constructor(private svc: NavbarService) {}

  ngOnInit() {
    this.navItems = this.svc.navItems;
  }
}
