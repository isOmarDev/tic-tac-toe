import { useCallback, useState } from 'react';

export const useActiveButton = (intialActive?: string) => {
  const [activeButton, setActiveButton] =
    useState(intialActive);

  const handleActiveButton = useCallback(
    (button: string) => {
      setActiveButton(button);
    },
    [],
  );

  return {
    activeButton,
    handleActiveButton,
  };
};
