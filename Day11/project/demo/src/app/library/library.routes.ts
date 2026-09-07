import { Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { BooksComponent } from './books/books.component';

export const libraryRoutes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      { path: 'books', component: BooksComponent },
    ],
  },
];
