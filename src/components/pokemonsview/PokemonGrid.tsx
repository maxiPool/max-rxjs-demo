import { AgGridReact } from "ag-grid-react";
import { MutableRefObject, useCallback, useRef } from "react";
import { Pokemon } from "../../infra/catfacts/model/Pokemon";
import "./gridStyles.css";
import { useObservableState } from "observable-hooks";
import { refreshedPokemons$ } from "../../infra/catfacts/service/PokemonService";
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from "ag-grid-community";
import { columnDefs$, initialColumnDefs } from "../ColumnDefs";
import { useObservableStateSideEffect } from "../common/useObservableStateSideEffect";
import { tap } from "rxjs";

const defaultColDef: ColDef = { sortable: true, resizable: true };

const PokemonGrid = () => {
  const gridRef: MutableRefObject<AgGridReact<Pokemon> | null> = useRef(null); // Optional - for accessing Grid's API
  const gridApiRef: MutableRefObject<GridApi<Pokemon> | null> = useRef(null);
  const columnApiRef: MutableRefObject<ColumnApi | null> = useRef(null);

  const onGridReady = useCallback((e: GridReadyEvent) => {
    if (e.api) {
      gridApiRef.current = e.api;
      columnApiRef.current = e.columnApi;
    }
  }, []);

  const pokemons = useObservableState(
    refreshedPokemons$.pipe(tap((_: Pokemon[]) => gridApiRef.current?.sizeColumnsToFit()))
  );
  const columnDefs: ColDef[] = useObservableState(columnDefs$, initialColumnDefs);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback((event: any) => {
    console.log("cellClicked", event);
  }, []);

  return (
    <div>
      {/* On div wrapping Grid
      a) specify theme CSS Class and
      b) sets Grid size */}
      <div className="ag-theme-balham-dark" style={{ width: "100%", height: 800 }}>
        <AgGridReact<Pokemon>
          ref={gridRef} // Ref for accessing Grid's API
          onGridReady={onGridReady}
          rowData={pokemons} // Row Data for Rows
          columnDefs={columnDefs} // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
          rowSelection="multiple" // Options - allows click selection of rows
          onCellClicked={cellClickedListener} // Optional - registering for Grid Event
        />
      </div>
    </div>
  );
};

export default PokemonGrid;
