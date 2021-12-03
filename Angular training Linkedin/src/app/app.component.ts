import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*For Wrtie Html Code within Same File */
  // template: `
  // <h1>My App</h1>
  // <p>How are your</p>
  // `
  // styles: [`
  // h1{color:blue;}
  // .desc{
  //   color:green;
  // }
  // `],
  /* TO Write Html Code in Give path file Same with style */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training0201';
  firstMediaItem = {
    category: 'series',
    year: '2010',
    wasWatched: true
  };
  onMediaItemDelete(mediaItem) {

  }
}
