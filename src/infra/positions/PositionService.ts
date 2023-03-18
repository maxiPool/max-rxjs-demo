import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { Position } from "./model/Position";
import { positions$ } from "./resource/PositionResource";

const selectedPositionIdsSubject = new BehaviorSubject<Set<string>>(new Set<string>());

const selectedPositionIds$ = selectedPositionIdsSubject.asObservable();

export const addSelectedPositionId = (id: string) => {
  const nextSet = selectedPositionIdsSubject.value.add(id);
  selectedPositionIdsSubject.next(nextSet);
};

export const removeSelectedPositionId = (id: string) => {
  const nextSet = selectedPositionIdsSubject.value;
  nextSet.delete(id);
  selectedPositionIdsSubject.next(nextSet);
};

export const selectedPositions$: Observable<Position[]> = combineLatest([positions$, selectedPositionIds$]).pipe(
  map(
    ([positions, selectedPositionIds]: [Position[], Set<string>]) =>
      [...selectedPositionIds]
        .map((id: string) => positions.find((p: Position) => p.id === id) as Position | undefined)
        .filter((p) => p !== undefined) as Position[]
  )
);
