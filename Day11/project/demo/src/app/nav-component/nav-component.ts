import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-nav-component',
  styleUrl: './nav-component.css',
  templateUrl: './nav-component.html',
})
export class NavComponent {}
