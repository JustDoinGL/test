import { useCallback, useRef } from 'react';

export const useInterSection = (onInterest: () => void) => {
  const unsubscribe = useRef(() => {});

  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((interSection) => {
        if (interSection.isIntersecting) {
          onInterest();
        }
      });
    });

    if (el) {
      observer.observe(el);
      unsubscribe.current = () => observer.disconnect();
    } else {
      unsubscribe.current();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
