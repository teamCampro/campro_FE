import { useCallback, useRef } from 'react';

function useRefs<T>(): [
  (T | null)[],
  (el: T | null) => void,
  (el: T | null) => void,
] {
  const refs = useRef<(T | null)[]>([]);

  const setRef = useCallback((el: T | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  }, []);

  const removeRef = useCallback((el: T | null) => {
    refs.current = refs.current.filter((refEl) => refEl !== el);
  }, []);

  return [refs.current, setRef, removeRef];
}

export default useRefs;
