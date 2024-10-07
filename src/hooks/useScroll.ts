import { useCallback, useEffect, useState } from 'react';

export const useScroll = <
  T extends HTMLElement = HTMLElement,
>(
  ref?: React.RefObject<T> | null,
) => {
  const [scroll, setScroll] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  const getScrollXY = useCallback(() => {
    const elem = ref?.current;
    return {
      scrollX: elem ? elem.scrollLeft : window.scrollX,
      scrollY: elem ? elem.scrollTop : window.scrollY,
    };
  }, [ref]);

  useEffect(() => {
    // Intialize scroll
    setScroll(getScrollXY());

    const elem = ref?.current || window;

    const handleScroll = () => {
      setScroll(getScrollXY());
    };

    elem.addEventListener('scroll', handleScroll);

    return () => {
      elem.removeEventListener('scroll', handleScroll);
    };
  }, [getScrollXY, ref]);

  return scroll;
};
