import { exhaustMap, Observable, Subject } from "rxjs";
import React from "react";
import PokemonResource from "../resource/PokemonResource";
import { Pokemon } from "../model/Pokemon";

export const refreshPokemonsAction: Subject<React.MouseEvent> = new Subject<React.MouseEvent>();
const refreshPokemonsAction$: Observable<React.MouseEvent> = refreshPokemonsAction.asObservable();

export const refreshedPokemons$: Observable<Pokemon[]> = refreshPokemonsAction$.pipe(
  exhaustMap(() => PokemonResource.pokemon$)
);
