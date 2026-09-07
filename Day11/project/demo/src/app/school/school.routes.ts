import { Routes } from '@angular/router';
import { SchoolComponent } from './school.component';
import { studentsRoutes } from './students/students.routes';

export const schoolRoutes: Routes = [
  {
    path: '',
    component: SchoolComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'students', children: studentsRoutes },
    ],
  },
];
