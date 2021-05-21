import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarComponent } from './components/editar/editar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NuevaBandaComponent } from './components/nueva-banda/nueva-banda.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bandas' },
  {path:'bandas', component:MainPageComponent},
  {path:'bandas/:bandaId', component:DetalleComponent},
  {path:'bandas/:bandaId/editar', component:EditarComponent},
  {path:'nuevaBanda', component:NuevaBandaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
