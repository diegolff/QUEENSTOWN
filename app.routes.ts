
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HotelesComponent} from './components/hoteles/hoteles.component';
import {LandscapesComponent} from './components/landscapes/landscapes.component';
import {ActivitiesComponent} from './components/activities/activities.component';
import {HotelComponent} from './components/hotel/hotel.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'landscapes', component: LandscapesComponent },
  { path: 'hoteles', component: HotelesComponent },
  { path: 'hotel/:id', component: HotelComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
