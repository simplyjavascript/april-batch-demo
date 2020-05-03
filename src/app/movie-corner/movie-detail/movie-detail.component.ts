import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Movie } from "src/app/movie.model";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { MovieService } from "src/app/movie.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit {
  @Input() selectedMovie: Movie;
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private movieSvc: MovieService,
    private router: Router
  ) {}

  ngOnChanges(changes): void {}

  ngOnInit() {
    console.log(this.selectedMovie);
  }
  onMovieDelete(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void {
    this.movieSvc.deleteMovie(this.selectedMovie.id).subscribe((response) => {
      console.log("Movie deleted successfully.");
      this.modalRef.hide();
    });
  }

  decline(): void {
    this.modalRef.hide();
  }

  onEdit() {
    this.movieSvc.selectedMovie.next(this.selectedMovie);
    this.router.navigateByUrl("/edit");
  }
}
