import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import { AuthGuard } from './auth.guard';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaGerenteComponent } from './components/vista-gerente/vista-gerente.component';
import { VistaEspecialistaComponent } from './components/vista-especialista/vista-especialista.component';
import { VistaClienteComponent } from './components/vista-cliente/vista-cliente.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'administrador', component: VistaAdministradorComponent, canActivate: [AuthGuard]},
  {path: 'gerente', component: VistaGerenteComponent, canActivate: [AuthGuard]},
  {path: 'especialista', component: VistaEspecialistaComponent, canActivate: [AuthGuard]},
  {path: 'cliente', component: VistaClienteComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
