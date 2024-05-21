import { Component, Input } from "@angular/core";
import { PokemonDetails } from "src/utils/types/PokemonDetails";

@Component({
    selector: 'sprites-carousel',
    templateUrl: './sprites-carousel.component.html',
    styleUrl: './sprites-carousel.component.scss'
})
export class SpritesCarouselComponent {

    @Input('pokemon') pokemon!: PokemonDetails;

    getSprites(): {version: string, url: string|null}[] {
        return [
            { version: 'Official Artwork', url: this.pokemon.sprites.other["official-artwork"].front_default},
            { version: 'Home', url: this.pokemon.sprites.other.home.front_default },
            { version: 'Dream World', url: this.pokemon.sprites.other.dream_world.front_default },
            { version: 'Pokémon Showdown', url: this.pokemon.sprites.other.showdown.front_default },
            { version: 'default', url: this.pokemon.sprites.front_default },
            { version: 'Red/Blue', url: this.pokemon.sprites.versions["generation-i"]["red-blue"].front_default },
            { version: 'Yellow', url: this.pokemon.sprites.versions["generation-i"].yellow.front_default },
            { version: 'Cristal', url: this.pokemon.sprites.versions["generation-ii"].crystal.front_default },
            { version: 'Gold', url: this.pokemon.sprites.versions["generation-ii"].gold.front_default },
            { version: 'Emerald', url: this.pokemon.sprites.versions["generation-iii"].emerald.front_default },
            { version: 'FireRed/LeafGreen', url: this.pokemon.sprites.versions["generation-iii"]["firered-leafgreen"].front_default },
            { version: 'Ruby/Sapphire', url: this.pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].front_default },
            { version: 'Diamond/Pearl', url: this.pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default },
            { version: 'HeartGold/SoulSilver', url: this.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default },
            { version: 'Platinium', url: this.pokemon.sprites.versions["generation-iv"].platinum.front_default },
            { version: 'Black/White', url: this.pokemon.sprites.versions["generation-v"]["black-white"].front_default },
            { version: 'OmegaRuby/AlphaSapphire', url: this.pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default },
            { version: 'X/Y', url: this.pokemon.sprites.versions["generation-vi"]["x-y"].front_default },
            { version: 'Gen 7 icon', url: this.pokemon.sprites.versions["generation-vii"].icons.front_default },
            { version: 'Ultra Sun/Ultra Moon', url: this.pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default },
            { version: 'Gen 8 icon', url: this.pokemon.sprites.versions["generation-viii"].icons.front_default },
        ].filter(sprite => !!sprite.url)
    }
}