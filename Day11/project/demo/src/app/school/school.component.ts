import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-school',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css',
})
export class SchoolComponent {}
