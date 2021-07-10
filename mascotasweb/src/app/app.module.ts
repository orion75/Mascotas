import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonasComponent } from './personas/personas.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RazasComponent } from './razas/razas.component';
import { AddRazaComponent } from './add-raza/add-raza.component';
import { EditRazaComponent } from './edit-raza/edit-raza.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { AddMascotaComponent } from './add-mascota/add-mascota.component';
import { EditMascotaComponent } from './edit-mascota/edit-mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonasComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    RazasComponent,
    AddRazaComponent,
    EditRazaComponent,
    MascotasComponent,
    AddMascotaComponent,
    EditMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
