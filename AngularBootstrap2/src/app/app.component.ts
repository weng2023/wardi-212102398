import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularBootstrap';
  nama = 'Sandra velisia';
  nim = '212102379';
  showSearchBox: boolean = false;
  inputText: string = '';

  toggleSearch() {
    this.showSearchBox = true;
  }
  resetSearch() {
    this.showSearchBox = false;
    this.inputText = ''; // Reset the input field when canceling
  }
}
