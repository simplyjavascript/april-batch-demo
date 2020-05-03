import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  user = {
    imgUrl: "https://picsum.photos/400",
    name: "Varun",
    joined: "Joined in 2013",
    desc: "Kristy is an art director living in New York.",
    friends: 11,
  };

  constructor() {}

  ngOnInit() {}
}

// String binding {{  }}
// Attibute binding  [ ]
// Event binding   ()
// Two way binding --
