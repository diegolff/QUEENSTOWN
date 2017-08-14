import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HotelesService } from './servicios/hoteles.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { LandscapesComponent } from './components/landscapes/landscapes.component';
import { HotelComponent } from './components/hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HotelesComponent,
    ActivitiesComponent,
    LandscapesComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING

  ],
  providers: [
      HotelesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
