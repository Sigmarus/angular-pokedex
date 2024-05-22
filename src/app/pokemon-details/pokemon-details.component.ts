import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  constructor(private pokemonService: PokemonService) {}

  readonly pokemon$ = this.pokemonService.pokemon$;

  playAudio() {
    if (this.audio?.nativeElement.ended || this.audio?.nativeElement.autoplay === false) {
      this.audio.nativeElement.play();
    }
  }

}
