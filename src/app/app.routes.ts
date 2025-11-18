import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'users/:id', component: UserDetailComponent },
  // lazy route (we'll add file in step 6)

  { path: '**', redirectTo: '' }
];
