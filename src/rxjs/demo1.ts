import { concatMap, fromEvent, map, mergeMap, Observable, of, switchMap, tap } from "rxjs";

const click$ = fromEvent(document, "click").pipe(tap(() => console.log("inside click$")));

const ob1$: Observable<number> = of(1, 2, 3).pipe(
  map((x) => x * 2),
  tap(() => "inside ob1$")
);

export const clickSwitchMap$: Observable<number> = click$.pipe(
  switchMap(() => {
    console.log("inside switchMap");
    return ob1$;
  })
);

export const clickMergeMap$: Observable<number> = click$.pipe(
  mergeMap(() => {
    console.log("inside mergeMap");
    return ob1$;
  })
);

export const clickConcatMap$: Observable<number> = click$.pipe(
  concatMap(() => {
    console.log("inside concatMap");
    return ob1$;
  })
);
