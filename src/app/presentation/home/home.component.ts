import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import AOS from "aos";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './home.component.html',

})
export class HomeComponent {
  constructor() { 
    AOS.init()
  }

  toggleDarkMode(): void{
    document.body.classList.toggle('dark');
  }
}
