import { Component } from '@angular/core';
import { FooterComponent } from './footerComponent/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav-component/nav-component';

@Component({
  imports: [NavComponent, FooterComponent, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
