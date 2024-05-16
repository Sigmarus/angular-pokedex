import { Component } from '@angular/core';
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
  firstPage = true;
  lastPage = false;

  constructor(private pokemonListService: PokemonListServiceComponent) {}

  pokemons$ = this.pokemonListService.pokemons$.pipe(
    tap(response => {
      this.count = response.count;
    }),
    map(pokemons => pokemons.results)
  );

  goToNextPage() {
    if (this.pagination.offset + this.pagination.limit > this.count) {
      this.goToLastPage();
      return;
    }
    this.pagination.offset += this.pagination.limit;
    this.pokemonListService.changePagination(this.pagination);
    this.lastPage = false;
    this.firstPage = false;
  }

  goToPreviousPage() {
    if (this.pagination.offset - this.pagination.limit < 0) {
      this.goToFirstPage();
      return;
    }
    this.pagination.offset -= this.pagination.limit;
    this.pokemonListService.changePagination(this.pagination);
    this.lastPage = false;
    this.firstPage = false;
  }

  goToLastPage() {
    const lastPageRemainingItems = (this.count % this.pagination.limit);
    this.pagination.offset = this.count - (lastPageRemainingItems > 0 ? lastPageRemainingItems : this.pagination.limit);
    this.pokemonListService.changePagination(this.pagination);
    this.lastPage = true;
    this.firstPage = false;
  }

  goToFirstPage() {
    this.pagination.offset = 0;
    this.pokemonListService.changePagination(this.pagination);
    this.lastPage = false;
    this.firstPage = true;
  }
}
