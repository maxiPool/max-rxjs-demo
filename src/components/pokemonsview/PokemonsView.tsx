import { refreshPokemonsAction } from "../../infra/catfacts/service/PokemonService";
import React from "react";
import PokemonGrid from "./PokemonGrid";

export const FOUR_ROW_GRID = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  maxWidth: 600,
  gap: "1rem",
};

const PokemonsView = () => {
  return (
    <div>
      <h2> Public Apis View </h2>
      <h4>Pokemons</h4>
      <button onClick={(event: React.MouseEvent) => refreshPokemonsAction.next(event)}>Refresh</button>
      <br />
      <br />
      <PokemonGrid />
    </div>
  );
};

export default PokemonsView;
