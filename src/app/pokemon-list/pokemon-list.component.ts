import { Component, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';
import { Pagination } from 'src/utils/types/Pagination';
import { SimpleResource } from 'src/utils/types/SimpleResource';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  count!: number;
  pagination = new Pagination();
  firstPage = true;
  lastPage = false;

  selectedPokemonName = signal<string|undefined>(undefined);

  constructor(private pokemonService: PokemonService) {}

  pokemons$ = this.pokemonService.pokemons$.pipe(
    tap(response => {
      this.count = response.count;
    }),
    map(pokemons => pokemons.results)
  );

  onSelected(pokemon: SimpleResource) {
    this.selectedPokemonName.set(pokemon.name);
    this.pokemonService.onSelectPokemon(pokemon);
  }

  goToNextPage() {
    if (this.pagination.offset + this.pagination.limit > this.count) {
      this.goToLastPage();
      return;
    }
    this.pagination.offset += this.pagination.limit;
    this.pokemonService.onChangePagination(this.pagination);
    this.lastPage = false;
    this.firstPage = false;
  }

  goToPreviousPage() {
    if (this.pagination.offset - this.pagination.limit < 0) {
      this.goToFirstPage();
      return;
    }
    this.pagination.offset -= this.pagination.limit;
    this.pokemonService.onChangePagination(this.pagination);
    this.lastPage = false;
    this.firstPage = false;
  }

  goToLastPage() {
    const lastPageRemainingItems = (this.count % this.pagination.limit);
    this.pagination.offset = this.count - (lastPageRemainingItems > 0 ? lastPageRemainingItems : this.pagination.limit);
    this.pokemonService.onChangePagination(this.pagination);
    this.lastPage = true;
    this.firstPage = false;
  }

  goToFirstPage() {
    this.pagination.offset = 0;
    this.pokemonService.onChangePagination(this.pagination);
    this.lastPage = false;
    this.firstPage = true;
  }
}
