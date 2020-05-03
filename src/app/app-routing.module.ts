import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { AddMovieFormComponent } from "./add-movie-form/add-movie-form.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contact", component: ContactsComponent },
  { path: "add", component: AddMovieFormComponent },
  { path: "edit", component: AddMovieFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
