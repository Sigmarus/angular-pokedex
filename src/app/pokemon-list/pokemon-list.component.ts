import { Component, OnInit } from '@angular/core';
import { PokemonListServiceComponent } from './pokemon-list.service';
import { map, tap } from 'rxjs/operators';
import { Pagination } from './pagination';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  count!: number;
  pagination = new Pagination();

  constructor(private pokemonListService: PokemonListServiceComponent) {}

  pokemons$ = this.pokemonListService.pokemons$.pipe(
    tap(response => {
      this.count = response.count;
    }),
    map(pokemons => pokemons.results)
  );

  pageNext() {
    if (this.pagination.offset + this.pagination.limit > this.count) {
      return;
    }
    this.pagination.offset += this.pagination.limit;
    this.pokemonListService.changePagination(this.pagination);
  }

  pagePrevious() {
    if (this.pagination.offset - this.pagination.limit < 0) {
      return;
    }
    this.pagination.offset -= this.pagination.limit;
    this.pokemonListService.changePagination(this.pagination);
  }
}
