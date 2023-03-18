import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export const useObservableStateSideEffect = <T>(
  observable: Observable<T>,
  initialState: T,
  sideEffect: () => void
): T => {
  const [t, setT] = useState(initialState);

  useEffect(() => {
    const subscription = observable.subscribe((t: T) => {
      setT(t);
      sideEffect();
    });
    return () => subscription.unsubscribe();
  }, [sideEffect]);

  return t;
};
