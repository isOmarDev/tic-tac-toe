import { createContext, useContext } from 'react';

type DialogContextValue = {
  isOpen: boolean;
  onClose: () => void;
};

export const DialogContext =
  createContext<DialogContextValue | null>(null);

export const useDialogContext = () => {
  try {
    const dialogContext = useContext(DialogContext);
    return dialogContext;
  } catch (error) {
    throw new Error(
      'Context has to be used within <DialogContext.Provider>',
    );
  }
};
