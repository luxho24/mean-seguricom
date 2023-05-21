import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    document_type: '',
    document_number: '',
    birth_date: '',
    password: '',
    rol: ''
  }

  tipo_cliente = [
    {tipo: "Persona"},
    {tipo: "Empresa"}
  ]

  // tipo_cliente = [
  //   {codigo: "P", nombre: "Persona"},
  //   {codigo: "E", nombre: "Empresa"}
  // ]

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    
  }

  signUp() {
    console.log(this.user);

    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
  }
}
