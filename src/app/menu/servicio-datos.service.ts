import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "https://jsonplaceholder.typicode.com/.";
   }
   loadInfo(){
    return this.httpClient.get(this.url); 
  }
}
