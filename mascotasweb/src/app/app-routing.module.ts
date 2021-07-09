import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonaComponent } from './add-persona/add-persona.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';
import { HomeComponent } from './home/home.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'personas',component:PersonasComponent},
  {path: 'add-persona',component:AddPersonaComponent},
  {path: 'edit-persona/:id',component:EditPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
