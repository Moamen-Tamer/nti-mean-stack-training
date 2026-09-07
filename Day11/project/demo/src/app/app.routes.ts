import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./homeComponent/home.component').then((m) => m.HomeComponent) },
    { path: 'about', loadComponent: () => import('./aboutComponent/about.component').then((m) => m.AboutComponent) },
    { path: 'contactUs', loadComponent: () => import('./contactUsComponent/contactUs.component').then((m) => m.ContactUsComponent) },
    { path: 'library', loadChildren: () => import('./library/library.routes').then((m) => m.libraryRoutes) },
    { path: 'school', loadChildren: () => import('./school/school.routes').then((m) => m.schoolRoutes) },
    { path: '**', loadComponent: () => import('./errorComponent/error').then((m) => m.ErrorComponent) }
];