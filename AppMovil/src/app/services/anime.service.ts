import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {

  private apiUrl = 'https://api.jikan.moe/v4/anime';

  constructor(private http: HttpClient) {}

  getAnimes() {
    return this.http.get(this.apiUrl);
  }

  searchAnime(nombre: string) {
    return this.http.get(`${this.apiUrl}?q=${nombre}`);
  }
}