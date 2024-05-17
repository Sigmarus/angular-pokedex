import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { CeilIntegerPipe } from 'src/utils/CeilIntegerPipe';
import { IdFormatPipe } from 'src/utils/IdFormatPipe';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent
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
    IdFormatPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
