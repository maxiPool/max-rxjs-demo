import { Position } from "../../infra/positions/model/Position";
import { useObservableState } from "observable-hooks";
import { positions$ } from "../../infra/positions/resource/PositionResource";
import {
  addSelectedPositionId,
  removeSelectedPositionId,
  selectedPositions$,
} from "../../infra/positions/PositionService";
import { TWO_ROW_GRID } from "../../App";

const Positions = () => {
  const positions: Position[] = useObservableState(positions$, []);
  const selectedPositions: Position[] = useObservableState(selectedPositions$, []);

  return (
    <div style={TWO_ROW_GRID}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Positions</p>
        {positions.map((p: Position) => {
          return (
            <button key={p.id} onClick={() => addSelectedPositionId(p.id)}>
              {p.id}
            </button>
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Selected Positions</p>
        {selectedPositions.map((p: Position) => {
          return (
            <button key={p.id} onClick={() => removeSelectedPositionId(p.id)}>
              {p.id} size = {p.size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Positions;
