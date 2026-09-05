import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home.component';
import { ContactUsComponent } from './contactUsComponent/contactUs.component';
import { AboutComponent } from './aboutComponent/about.component';
import { ErrorComponent } from './errorComponent/error';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: '**', component: ErrorComponent }
];
