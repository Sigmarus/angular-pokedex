import { environment } from 'src/environments/environment';

import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { Pagination } from './pagination';

@Injectable({ providedIn: 'root' })
export class PokemonListServiceComponent {

    private http = inject(HttpClient);
    private baseUrl = environment.pokeapiBaseUrl + '/pokemon'

    private pokemonPageSubject = new BehaviorSubject<Pagination>(new Pagination());
    readonly pokemonPage$ = this.pokemonPageSubject.asObservable();

    readonly pokemons$ = this.pokemonPage$
        .pipe(
            tap(page => console.log(page)),
            switchMap(page => {
                let params = new HttpParams();
                if (page.offset) params = params.set('offset', page.offset);
                if (page.limit)  params = params.set('limit', page.limit);
                const options = params.keys().length ? {params} : {};
                return this.http.get<any>(this.baseUrl, options)
                    .pipe(
                        tap(pokemons => console.log(pokemons)),
                        catchError(this.handleError)
                    );
            }),
            catchError(this.handleError)
        );

    changePagination(pagination: Pagination) {
        this.pokemonPageSubject.next(pagination);
    }

    handleError(error: any): Observable<never> {
        console.error(error);
        return EMPTY;
    }
}