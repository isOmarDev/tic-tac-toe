import { useCallback, useState } from 'react';

export const useImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setIsError(true);
  }, []);

  return {
    isLoaded,
    isError,
    handleImageLoad,
    handleImageError,
  };
};
