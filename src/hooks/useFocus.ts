import { useEffect, useRef } from 'react';

export const useFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return inputRef;
};
