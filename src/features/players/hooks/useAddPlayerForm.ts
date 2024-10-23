import { useCallback, useState } from 'react';
import { NameSchema, Player } from '../types';
import { validate } from '@/utils';
import { useFocus } from '@/hooks';

type UseAddPlayerFormProps = {
  initialName?: string;
  onSuccess?: (name: string) => void;
};
export const useAddPlayerForm = ({
  initialName = '',
  onSuccess,
}: UseAddPlayerFormProps) => {
  const [name, setName] = useState<Player['name']>(initialName);
  const [error, setError] = useState('');

  const inputRef = useFocus();

  const resetError = useCallback(() => {
    if (error) {
      setError('');
    }
  }, [error]);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      setName(value);
      resetError();
    },
    [resetError],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      const validation = validate(name, NameSchema);

      if (validation.success) {
        onSuccess?.(name);
        resetError();
      } else {
        const errors = validation.error.flatten().formErrors;
        setError(errors[0]);
        inputRef.current?.focus();
      }
    },
    [inputRef, name, onSuccess, resetError],
  );

  return {
    name,
    error,
    inputRef,
    handleChange,
    handleSubmit,
  };
};
