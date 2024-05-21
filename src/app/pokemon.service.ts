import { environment } from 'src/environments/environment';
import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { Pagination } from 'src/utils/types/Pagination';
import { PokemonListPage } from 'src/utils/types/PokemonListPage';
import { SimpleResource } from 'src/utils/types/SimpleResource';
import { PokemonDetails } from 'src/utils/types/PokemonDetails';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class PokemonService {

    constructor(private toastr: ToastrService) {}

    private http = inject(HttpClient);
    private baseUrl = environment.pokeapiBaseUrl + '/pokemon';

    private pokemonPageSubject = new BehaviorSubject<Pagination>(new Pagination());
    readonly pokemonPage$ = this.pokemonPageSubject.asObservable();

    private pokemonSelectedSubject = new BehaviorSubject<string|undefined>(undefined);
    readonly pokemonSelected$ = this.pokemonSelectedSubject.asObservable();

    readonly pokemons$ = this.pokemonPage$
        .pipe(
            switchMap(pagination => {
                let params = new HttpParams();
                if (pagination.offset) params = params.set('offset', pagination.offset);
                if (pagination.limit)  params = params.set('limit', pagination.limit);
                const options = params.keys().length ? {params} : {};
                return this.http.get<PokemonListPage>(this.baseUrl, options)
                    .pipe(
                        catchError(this.handleError)
                    );
            }),
            catchError(this.handleError)
        );

        readonly pokemon$ = this.pokemonSelected$
        .pipe(
            filter(Boolean),
            switchMap(url => 
                this.http.get<PokemonDetails>(url as string)
                    .pipe(
                        catchError(this.handleError)
                    )
            ),
            catchError(this.handleError)
        );

    onSelectPokemon(identifier: SimpleResource) {
        this.pokemonSelectedSubject.next(identifier.url);
    }
    
    onChangePagination(pagination: Pagination) {
        this.pokemonPageSubject.next(pagination);
    }

    handleError(err: HttpErrorResponse): Observable<never> {
        console.error(err);
        /*if (err.error instanceof ErrorEvent) {
            this.toastr.error(err.error.message, 'An error occurred');
        } else {
            this.toastr.error(err.statusText, `Server returned code: ${err.status}`);
        }*/
        return EMPTY;
    }
}