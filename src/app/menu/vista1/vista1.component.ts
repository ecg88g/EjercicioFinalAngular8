import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from '../servicio-datos.service';

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component implements OnInit {

  usuarios: any;

  constructor(private servicioDatosService: ServicioDatosService) { }

  ngOnInit() {

    this.servicioDatosService.loadInfo().subscribe(
      (response) => {
        console.log("data: ",response);

        this.usuarios = response;
      },
      (error) => {
        
      }
    );
  }

}