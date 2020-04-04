import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  title = 'Nueva Aplicación';
  name: string;
 
  usuario = new Usuario();
 
  Ingresar() {
    console.log(JSON.stringify(this.usuario));
    if(this.usuario.email == "matiassh20@gmail.com" && this.usuario.password == "matias")
    {
        this.route.navigate(["home"]);
    }
    else
    {
        this.route.navigate(["error"]);
    }
  }

}
