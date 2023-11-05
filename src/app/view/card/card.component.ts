import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonResponse } from '../models/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  titulo: string = 'Pokemon';
  tipo: any[] = [];
  imagem: string = 'localrost';
  imagemAlt: string = 'pokemon';

  pokemon?: PokemonResponse;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.pesquisar('bulbasaur');
  }

  pesquisar(name: number | string) {
    this.service.pesquisar(name).subscribe({
      next: (item: PokemonResponse) => {
        this.titulo = item.name;
        this.imagemAlt = item.name;
        this.imagem = item.sprites.front_default;
        this.tipo = item.types;
      },
    });
  }
}
