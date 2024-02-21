import { useCallback, useRef } from 'react';

export function useBodyScrollLock() {
  const position = useRef(0);

  const lockScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    position.current = scrollPosition;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  }, []);

  const openScroll = useCallback(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, position.current);
  }, []);

  return { lockScroll, openScroll };
}

export default useBodyScrollLock;
