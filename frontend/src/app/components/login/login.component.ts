import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listUsers: Usuario[] = []

  user = {
    email: '',
    password: '',
    rol: ''
  }

  // roles = [
  //   {codigo: 1, rol: "Administrador"},
  //   {codigo: 2, rol: "Gerente"},
  //   {codigo: 3, rol: "Especialista"},
  //   {codigo: 4, rol: "Cliente"}
  // ]

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    
  }

  signIn() {
    console.log(this.user);
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
        },
        err => console.log(err)
      )
  }

  obtenerRol() {
    this.authService.getUsers()
    .subscribe(
      data => {
        console.log(data);
        this.listUsers = data

        if (this.authService.getUsers == '1') {
          this.router.navigate(['/administrador']);
        } else if (this.user.rol == '2') {
          this.router.navigate(['/gerente']);
        } else if (this.user.rol == '3') {
          this.router.navigate(['/especialista']);
        } else {
          this.router.navigate(['/cliente']);
        }
      }, error => {
        console.log(error);
      }
    )
  }
}
