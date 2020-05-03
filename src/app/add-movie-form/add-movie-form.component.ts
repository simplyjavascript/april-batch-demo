import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";
import { Router } from "@angular/router";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "app-add-movie-form",
  templateUrl: "./add-movie-form.component.html",
  styleUrls: ["./add-movie-form.component.scss"],
})
export class AddMovieFormComponent implements OnInit {
  movieForm: FormGroup;
  mode = "Add";
  selectedId = "";
  sub: Subscription;
  intervalSub: Subscription;
  constructor(private movieSvc: MovieService, private router: Router) {}

  ngOnInit() {
    this.movieForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      rating: new FormControl(null, Validators.required),
      movieCast: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      language: new FormControl(null, Validators.required),
      genre: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      popularity: new FormControl(null, Validators.required),
      imdbRating: new FormControl(null, Validators.required),
      synopsis: new FormControl(null, Validators.required),
    });

    this.sub = this.movieSvc.selectedMovie.subscribe((selectedMov) => {
      if (!selectedMov) {
        this.mode = "Add";
      } else {
        this.mode = "Edit";
        this.setMovieForm(selectedMov);
        console.log(selectedMov);
      }
    });
  }

  setMovieForm(selectedMovie) {
    const {
      name,
      rating,
      cast,
      imageUrl,
      language,
      genre,
      duration,
      popularity,
      imdb_rating,
      synopsis,
    } = selectedMovie;
    this.movieForm.setValue({
      name,
      rating,
      movieCast: cast,
      imageUrl,
      language,
      genre,
      duration,
      popularity,
      imdbRating: imdb_rating,
      synopsis,
    });
    this.selectedId = selectedMovie.id;
  }

  onSubmit() {
    console.log(this.movieForm);
    const {
      name,
      rating,
      movieCast,
      imageUrl,
      language,
      genre,
      duration,
      popularity,
      imdbRating,
      synopsis,
    } = this.movieForm.value;

    const movieObj: Movie = {
      id: this.selectedId || null,
      name,
      rating,
      cast: movieCast,
      imageUrl,
      language,
      genre,
      duration,
      popularity,
      imdb_rating: imdbRating,
      synopsis,
    };

    if (this.mode === "Add") {
      this.movieSvc.addMovie(movieObj).subscribe((result) => {
        console.log(result);
        this.movieForm.reset();
        this.router.navigateByUrl("/");
      });
    }
    if (this.mode === "Edit") {
      this.movieSvc.updateMovie(movieObj, this.selectedId).subscribe((res) => {
        this.movieForm.reset();
        this.movieSvc.getMovies();
        this.router.navigateByUrl("/");
      });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
