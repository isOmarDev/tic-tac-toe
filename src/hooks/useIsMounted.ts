import { useState, useEffect } from 'react';

export const useIsMounted = (delay?: number) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!delay) {
      setIsMounted(true);
      return;
    }

    const timer = setTimeout(
      () => setIsMounted(true),
      delay || 0,
    );

    return () => clearTimeout(timer);
  }, [delay]);

  return { isMounted };
};
