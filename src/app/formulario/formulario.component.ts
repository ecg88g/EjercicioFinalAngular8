import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario: string;
  pass: string;

  constructor(private Router: Router) { 
    this.usuario = this.usuario;
    this.pass = this.pass;
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("M usuario es: ",this.usuario);
    this.Router.navigate(['/menu/menu-lateral']);
  }

}
