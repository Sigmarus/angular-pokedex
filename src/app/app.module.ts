import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CeilIntegerPipe } from 'src/utils/pipes/CeilIntegerPipe';
import { IdFormatPipe } from 'src/utils/pipes/IdFormatPipe';
import { FeetConvertorPipe } from 'src/utils/pipes/FeetConvertorPipe';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SpritesCarouselComponent } from './sprites-carousel/sprites-carousel.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { PoundsConvertorPipe } from 'src/utils/pipes/PoundsConvertor';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    SpritesCarouselComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      extendedTimeOut: 5000,
      positionClass: 'toast-bottom-right'
    }),
    CeilIntegerPipe,
    IdFormatPipe,
    FeetConvertorPipe,
    PoundsConvertorPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
