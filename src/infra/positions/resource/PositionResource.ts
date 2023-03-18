import { Position } from "../model/Position";
import { BehaviorSubject, Observable } from "rxjs";

const ids = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((x) => String.fromCharCode(x));
const positions: Position[] = ids.map((id) => ({ id, size: Math.round(Math.random() * 1_000) }));

const positionsSubject: BehaviorSubject<Position[]> = new BehaviorSubject(positions);

export const positions$: Observable<Position[]> = positionsSubject.asObservable();
