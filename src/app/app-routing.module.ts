import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { AuthGuardServiceService } from './servicios/auth-guard-service.service';


const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'menu', loadChildren: "./menu/menu.module#MenuModule"},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
