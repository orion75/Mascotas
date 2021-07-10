import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMascotaComponent } from './add-mascota/add-mascota.component';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { AddRazaComponent } from './add-raza/add-raza.component';
import { EditMascotaComponent } from './edit-mascota/edit-mascota.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';
import { EditRazaComponent } from './edit-raza/edit-raza.component';
import { HomeComponent } from './home/home.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { PersonasComponent } from './personas/personas.component';
import { RazasComponent } from './razas/razas.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'personas',component:PersonasComponent},
  {path: 'add-persona',component:AddPersonaComponent},
  {path: 'edit-persona/:id',component:EditPersonaComponent},

  {path: 'razas',component:RazasComponent},
  {path: 'add-raza',component:AddRazaComponent},
  {path: 'edit-raza/:id',component:EditRazaComponent},

  {path: 'mascotas',component:MascotasComponent},
  {path: 'add-mascota',component:AddMascotaComponent},
  {path: 'edit-mascota/:id',component:EditMascotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
