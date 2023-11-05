import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonResponse } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url: string = '';

  constructor(private http: HttpClient) {
    this.url = environment.pokeApi;
  }

  pesquisar(pokemon: string | number): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.url}/${pokemon}`);
  }
}
