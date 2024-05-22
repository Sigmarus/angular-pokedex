import { Component, EventEmitter, OnInit, Output, effect, signal } from "@angular/core";
import { PokemonService } from "src/app/pokemon.service";
import { SimpleResource } from "src/utils/types/SimpleResource";

@Component({
    selector: 'searchbar',
    templateUrl: './searchbar.component.html',
    styleUrl: './searchbar.component.scss'
})
export class SearchBarComponent {
    
    @Output() pokemonSelect: EventEmitter<SimpleResource> = new EventEmitter();

    search = signal<string>('');
    results: SimpleResource[] = [
        /*{
            name: 'toto',
            url: 'url'
        }*/
    ];
    selectedPokemon = null;

    constructor(private service: PokemonService) {
        effect(() => console.log(this.search()));

        this.service.getCount()
    }

    onSelectPokemon(value: SimpleResource) {
        console.log(value)
        this.search.set('');
        this.results = [];
        this.pokemonSelect.emit(value);
    }
}