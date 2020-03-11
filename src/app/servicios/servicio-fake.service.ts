import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/info';

@Injectable({
  providedIn: 'root'
})

export class ServicioFakeService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "https://jsonplaceholder.typicode.com/.";
   }
   validarInfo(){
  }
}
