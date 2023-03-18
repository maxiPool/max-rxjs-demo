import { map, Observable, share, switchMap } from "rxjs";
import { Pokemon } from "../model/Pokemon";
import { fromFetch } from "rxjs/internal/observable/dom/fetch";

function getStart() {
  return Math.floor(Math.random() * 122);
}

const pokemon$: Observable<Pokemon[]> = fromFetch("/pokemon-simplified.json").pipe(
  switchMap((response) => response.json()),
  map((ps: Pokemon[]) => {
    const start = getStart();
    return ps.slice(start, start + 32);
  }),
  share()
);

const PokemonResource = {
  pokemon$,
};

export default PokemonResource;
