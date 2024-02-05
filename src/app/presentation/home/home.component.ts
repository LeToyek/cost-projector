import { Component, inject } from '@angular/core';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { Nav } from './nav';
// import { AngularFontAwesomeModule } from 'angular-font-awesome/dist';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faInstitution} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CdkDrag, CommonModule,FontAwesomeModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  homeService: HomeService = inject(HomeService);
  constructor() {
    AOS.init();
  }

  faWhatsapp = faWhatsapp
  faLinkedin = faLinkedin
  faInstagram = faInstagram
  faYoutube = faYoutube


  navList: Nav[] = [
    {
      name: 'About us',
      link: '#about-us-section',
    },
    {
      name: 'Pricing',
      link: '#pricing-section',
    },
    {
      name: "Example",
      link: '#features-section',
    },
  ];



  cellList: string[]=[
    "Difficulity Level",
    "Price",
    "Notes"
  ]

  pricingList = this.homeService.examplePricingList;

  toggleDarkMode(): void {
    document.body.classList.toggle('dark');
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  // dragEnded($event: CdkDragEnd): void {
  //   const { offsetLeft, offsetTop } = $event.source.element.nativeElement;
  //   const { x, y } = $event.distance;
  //   this.positionX = offsetLeft + x;
  //   this.positionY = offsetTop + y;
  //   this.showPopup = true;
  //   console.log({ positionX, positionY });
  // }
}
