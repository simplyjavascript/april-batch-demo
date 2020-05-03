import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  iframeUrl: any;
  movieSrc = "zqn1IM2DU8A"; //
  nextMovieUrl = "eHzACuCx9zY"; //
  index = 0;
  username = "Hari";
  email = "abc@gmail.com";
  @ViewChild("user", { static: false }) user: ElementRef;
  private setIframeUrl(id) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }

  onInputChange(el: HTMLInputElement) {
    console.log(el.value);
  }
  onEmailChange(el: HTMLInputElement) {
    console.log(el.value);
  }

  constructor(private sanitizer: DomSanitizer) {
    this.setIframeUrl(this.movieSrc);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {}

  changeMovie() {
    const urlArr = ["eHzACuCx9zY", "_VveOIAP0LI"];
    this.setIframeUrl(urlArr[this.index]);
    this.index = this.index + 1;
  }
}
