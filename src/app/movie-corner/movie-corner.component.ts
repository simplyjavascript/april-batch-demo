import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-corner",
  templateUrl: "./movie-corner.component.html",
  styleUrls: ["./movie-corner.component.scss"],
})
export class MovieCornerComponent implements OnInit {
  movies: Movie[] = [];
  selectedMovie = null;

  constructor(private svc: MovieService) {}

  ngOnInit() {
    this.svc.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.selectedMovie = this.movies[0];
    });
  }

  handleMovieSelect($event) {
    this.selectedMovie = $event;
  }
}
