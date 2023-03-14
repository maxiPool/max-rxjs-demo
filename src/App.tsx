import "./App.css";
import { useObservableState } from "observable-hooks";
import { clickConcatMap$, clickMergeMap$, clickSwitchMap$ } from "./rxjs/demo1";
import {
  addSelectedPositionId,
  Position,
  positions$,
  removeSelectedPositionId,
  selectedPositions$,
} from "./services/PositionService";

const TWO_ROW_GRID = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  maxWidth: 600,
  gap: "1rem",
};

const RxJS = () => {
  const clickSwitchMap = useObservableState(clickSwitchMap$);
  const clickMergeMap = useObservableState(clickMergeMap$);
  const clickConcatMap = useObservableState(clickConcatMap$);

  return (
    <div>
      <div>clickSwitchMap {clickSwitchMap}</div>
      <div>clickMergeMap {clickMergeMap}</div>
      <div>clickConcatMap {clickConcatMap}</div>
    </div>
  );
};

const Positions = () => {
  const positions: Position[] = useObservableState(positions$, []);
  const selectedPositions: Position[] = useObservableState(selectedPositions$, []);

  return (
    <div style={TWO_ROW_GRID}>
      <div>
        {positions.map((p: Position) => {
          return (
            <div key={p.id} onClick={() => addSelectedPositionId(p.id)}>
              {p.id}
            </div>
          );
        })}
      </div>
      <div>
        {selectedPositions
          /*.filter((p: Position) => p.selected)*/
          .map((p: Position) => {
            return (
              <div key={p.id} onClick={() => removeSelectedPositionId(p.id)}>
                {p.id}
              </div>
            );
          })}
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <div>Hello rxJS</div>
      <RxJS />
      <Positions />
    </div>
  );
}

export default App;
