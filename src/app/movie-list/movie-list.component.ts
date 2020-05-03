import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "../movie.model";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
})
export class MovieListComponent implements OnInit {
  @Input() movie: Movie;
  @Output() onMovieSelect = new EventEmitter<Movie>();
  constructor() {}

  ngOnInit() {}
  selectedMovie() {
    this.onMovieSelect.emit(this.movie);
  }
}
