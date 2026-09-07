import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-students',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {}
