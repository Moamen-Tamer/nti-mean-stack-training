import { Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { GradesComponent } from './grades/grades.component';

export const studentsRoutes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      { path: '', redirectTo: 'grades', pathMatch: 'full' },
      { path: 'grades', component: GradesComponent },
    ],
  },
];
