import { BehaviorSubject, combineLatestWith, map, Observable } from "rxjs";

export interface Position {
  id: string;
  size: number;
  selected?: boolean;
}

const ids = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((x) => String.fromCharCode(x));
const positions: Position[] = ids.map((id) => ({ id, size: Math.round(Math.random() * 1_000) }));

const positionsSubject: BehaviorSubject<Position[]> = new BehaviorSubject(positions);

export const positions$: Observable<Position[]> = positionsSubject.asObservable();

const selectedPositionIdsSubject = new BehaviorSubject<Set<string>>(new Set<string>());

export const addSelectedPositionId = (id: string) => {
  const nextSet = selectedPositionIdsSubject.value.add(id);
  selectedPositionIdsSubject.next(nextSet);
};

export const removeSelectedPositionId = (id: string) => {
  const nextSet = selectedPositionIdsSubject.value;
  nextSet.delete(id);
  selectedPositionIdsSubject.next(nextSet);
};

export const selectedPositions$ = positions$.pipe(
  combineLatestWith(selectedPositionIdsSubject),
  // map(([positions, selectedPositionIds]) =>
  //   positions.map((p: Position) => ({
  //     ...p,
  //     selected: selectedPositionIds.has(p.id),
  //   }))
  // )
  map(([positions, selectedPositionIds]: [Position[], Set<string>]) => {
    return [...selectedPositionIds].map((id: string) => {
      return positions.find((p: Position) => p.id === id);
    });
  })
);
