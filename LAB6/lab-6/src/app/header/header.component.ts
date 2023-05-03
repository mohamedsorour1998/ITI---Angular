import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  photoBanner = '../assets/photo-banner.jpeg';

  showRegisterForm: boolean ;
  showLoginForm: boolean ;
}
