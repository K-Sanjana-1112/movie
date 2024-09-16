
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: RegisterLoginComponent },
  { path: 'movies', component: MovieSearchComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
