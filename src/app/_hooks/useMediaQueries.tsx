import { useEffect, useState } from 'react';

export interface UseMediaQueriesProps {
  breakpoint: number;
}

const useMediaQueries = ({ breakpoint }: UseMediaQueriesProps) => {
  const [mediaQuery, setMediaQuery] = useState<Partial<MediaQueryListEvent>>({
    matches: true,
    media: '',
  });

  useEffect(() => {
    const mediaQueryList = matchMedia(`(max-width: ${breakpoint}px)`);
    const matches = window.innerWidth < breakpoint;
    setMediaQuery((prev) => ({
      ...prev,
      matches,
    }));
    const changeHandler = (e: MediaQueryListEvent) => {
      setMediaQuery(e);
    };

    // for chrome, firefox and modern browsers
    try {
      mediaQueryList.addEventListener('change', changeHandler);
    } catch (error) {
      try {
        mediaQueryList.addListener(changeHandler);
      } catch (error2) {
        console.error(error2);
      }
    }

    return () => {
      mediaQueryList.removeEventListener('change', changeHandler);
      mediaQueryList.removeListener(changeHandler);
    };
  }, [breakpoint]);

  return {
    mediaQuery,
  };
};

export default useMediaQueries;
