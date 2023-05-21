import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
  }

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
          localStorage.setItem('rol', res.rol);
          
          if(res.rol == "1") {
            this.router.navigate(['/administrador']);
          } else if (res.rol == "2"){
            this.router.navigate(['/gerente']);
          } else if (res.rol == "3"){
            this.router.navigate(['/especialista']);
          } else if (res.rol == "4"){
            this.router.navigate(['/cliente']);
          }
          
          // this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
  }
}
