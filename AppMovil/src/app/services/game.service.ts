import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiUrl = 'https://www.freetogame.com/api/games';

  constructor(private http: HttpClient) {}

  buscarJuego(nombre: string) {

    return this.http.get(this.apiUrl);

  }

}