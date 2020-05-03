import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Movie } from "./movie.model";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class MovieService {
  selectedMovie = new BehaviorSubject<Movie>(null);
  // selectedMovie = {... Super 30 }

  constructor(private http: HttpClient) {}
  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>("https://april-demo-a7d76.firebaseio.com/movies.json")
      .pipe(
        map((movie) => {
          const moviesArr: Movie[] = [];
          Object.keys(movie).forEach((mv) => {
            const movieObj: Movie = {
              id: mv,
              ...movie[mv],
            };
            moviesArr.push(movieObj);
          });
          return moviesArr;
        })
      );
  }

  addMovie(movie: Movie) {
    return this.http.post(
      "https://april-demo-a7d76.firebaseio.com/movies.json",
      {
        ...movie,
      }
    );
  }
  deleteMovie(id) {
    return this.http.delete(
      `https://april-demo-a7d76.firebaseio.com/movies/${id}.json`
    );
  }

  updateMovie(movie, id) {
    return this.http.put(
      `https://april-demo-a7d76.firebaseio.com/movies/${id}.json`,
      movie
    );
  }
}
