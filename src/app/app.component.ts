import { Component, ViewChild } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gudemann-portfolio';
  currentSection = 1;
  paused = true;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  onAppear(elementName) {
    console.log(elementName);
  }
  album: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 15; i++) {
      const src = 'assets/img/lightbox/image' + i + '.jpg';
      const thumb = 'assets/img/lightbox-thumb/image' + i + '.jpg';
      const album = {
        src: src,
        thumb: thumb
      };

      this.album.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
