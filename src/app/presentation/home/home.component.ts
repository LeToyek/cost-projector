import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './home.component.html',

})
export class HomeComponent {
  constructor() { }

  toggleDarkMode(): void{
    document.body.classList.toggle('dark');
  }
}
