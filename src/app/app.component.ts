import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = true;

  darkMode = false;

  darkModeToggle(){
    this.darkMode = !this.darkMode;
  }
}
