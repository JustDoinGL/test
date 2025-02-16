import { useLayoutEffect, useRef } from 'react';

export const useScrollPosition = (key: string) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const saveScrollPosition = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      sessionStorage.setItem(key, scrollPosition.toString());
    }
  };

  const restoreScrollPosition = () => {
    if (containerRef.current) {
      const savedPosition = sessionStorage.getItem(key);
      if (savedPosition) {
        containerRef.current.scrollTop = parseInt(savedPosition, 10);
      }
    }
  };

  useLayoutEffect(() => {
    restoreScrollPosition();

    return () => {
      saveScrollPosition();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return containerRef;
};
