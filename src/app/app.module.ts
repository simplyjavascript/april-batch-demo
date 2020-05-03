import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { DummyComponent } from "./dummy/dummy.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BannerComponent } from "./banner/banner.component";
import { CounterComponent } from "./counter/counter.component";
import { MovieCornerComponent } from "./movie-corner/movie-corner.component";
import { NgxMasonryModule } from "ngx-masonry";
import { MovieDetailComponent } from "./movie-corner/movie-detail/movie-detail.component";
import { SomeDummyComponent } from "./some-dummy/some-dummy.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { ShadowDirective } from "./shadow.directive";
import { ModalModule } from "ngx-bootstrap/modal";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AddMovieFormComponent } from "./add-movie-form/add-movie-form.component";
import { MovieListItemComponent } from "./movie-list-item/movie-list-item.component";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserCardComponent,
    DummyComponent,
    BannerComponent,
    CounterComponent,
    MovieCornerComponent,
    MovieDetailComponent,
    SomeDummyComponent,
    MovieListComponent,
    FooterComponent,
    MovieCardComponent,
    ShadowDirective,
    HomeComponent,
    GalleryComponent,
    ContactsComponent,
    AddMovieFormComponent,
    MovieListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxMasonryModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
