import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  // listUsers: Usuario[] = []
  
  user = {
    email: '',
    password: '',
    rol: ''
  }

  id: string | null;

  // user: Usuario;

  constructor(private authService: AuthService, private router: Router, private aRoute: ActivatedRoute, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      rol: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    
  }

  signIn() {
    console.log(this.user);

    this.authService.getUserById(this.id)
    .subscribe(
      data =>{
        console.log(data);
        this.user = data.rol;
        console.log(this.user)
      });

    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res)


          /*
          const USUARIO: Usuario = {
            firstname: this.userForm.get('firstname')?.value,
            lastname: this.userForm.get('lastname')?.value,
            email: this.userForm.get('email')?.value,
            phone: this.userForm.get('phone')?.value,
            document_type: this.userForm.get('document_type')?.value,
            document_number: this.userForm.get('document_number')?.value,
            birth_date: this.userForm.get('birth_date')?.value,
            password: this.userForm.get('password')?.value,
            rol: this.userForm.get('rol')?.value,
          }

          console.log(USUARIO);
          */



          // if (this.authService.getUsers == '1') {
          //   this.router.navigate(['/administrador']);
          // } else if (this.user.rol == '2') {
          //   this.router.navigate(['/gerente']);
          // } else if (this.user.rol == '3') {
          //   this.router.navigate(['/especialista']);
          // } else {
          //   this.router.navigate(['/cliente']);
          // }

          
          localStorage.setItem('token', res.token);
          this.router.navigate(['/cliente']);
        },
        err => console.log(err)
      )
  }

  // obtenerRol() {
  //   this.authService.getUsers()
  //   .subscribe(
  //     data => {
  //       console.log(data);
  //       this.listUsers = data

  //       if (this.authService.getUsers == '1') {
  //         this.router.navigate(['/administrador']);
  //       } else if (this.user.rol == '2') {
  //         this.router.navigate(['/gerente']);
  //       } else if (this.user.rol == '3') {
  //         this.router.navigate(['/especialista']);
  //       } else {
  //         this.router.navigate(['/cliente']);
  //       }
  //     }, error => {
  //       console.log(error);
  //     }
  //   )
  // }
}
