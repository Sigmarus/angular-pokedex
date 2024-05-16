import { environment } from 'src/environments/environment';

import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { Pagination } from './pagination';
import { PokemonListPage } from 'src/utils/types/PokemonListPage';

@Injectable({ providedIn: 'root' })
export class PokemonListServiceComponent {

    private http = inject(HttpClient);
    private baseUrl = environment.pokeapiBaseUrl + '/pokemon'

    private pokemonPageSubject = new BehaviorSubject<Pagination>(new Pagination());
    readonly pokemonPage$ = this.pokemonPageSubject.asObservable();

    readonly pokemons$ = this.pokemonPage$
        .pipe(
            tap(pagination => console.log(pagination)),
            switchMap(pagination => {
                let params = new HttpParams();
                if (pagination.offset) params = params.set('offset', pagination.offset);
                if (pagination.limit)  params = params.set('limit', pagination.limit);
                const options = params.keys().length ? {params} : {};
                return this.http.get<PokemonListPage>(this.baseUrl, options)
                    .pipe(
                        tap(page => console.log(page)),
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