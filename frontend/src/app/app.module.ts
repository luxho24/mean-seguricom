import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { VistaGerenteComponent } from './components/vista-gerente/vista-gerente.component';
import { VistaAdministradorComponent } from './components/vista-administrador/vista-administrador.component';
import { VistaEspecialistaComponent } from './components/vista-especialista/vista-especialista.component';
import { VistaClienteComponent } from './components/vista-cliente/vista-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PrivateTasksComponent,
    VistaGerenteComponent,
    VistaAdministradorComponent,
    VistaEspecialistaComponent,
    VistaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
