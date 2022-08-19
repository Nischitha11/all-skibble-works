import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PeopleComponent } from './pages/people/people.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { PersonsComponent } from './pages/people/persons/persons.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { PlanetpersonComponent } from './pages/planets/planetperson/planetperson.component';
import { StarshipComponent } from './pages/starships/starship/starship.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeopleComponent,
    PlanetsComponent,
    PersonsComponent,
    StarshipsComponent,
    HomeComponent,
    PlanetpersonComponent,
    StarshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
