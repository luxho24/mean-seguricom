import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import { AuthGuard } from './auth.guard';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EspecialistaComponent } from './components/especialista/especialista.component';
import { GerenteComponent } from './components/gerente/gerente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  {path: 'especialista', component: EspecialistaComponent, canActivate: [AuthGuard]},
  {path: 'gerente', component: GerenteComponent, canActivate: [AuthGuard]},
  {path: 'administrador', component: AdministradorComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
