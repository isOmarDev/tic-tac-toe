import { useCallback, useState } from 'react';

type UseAddPlayerFormProps = {
  initialName?: string;
  onAddPlayer: (name: string) => void;
};
export const useAddPlayerForm = ({
  initialName = '',
  onAddPlayer,
}: UseAddPlayerFormProps) => {
  const [name, setName] = useState(initialName);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      if (value.length <= 10) {
        setName(value.trim());
      }
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      onAddPlayer(name);
    },
    [name, onAddPlayer],
  );

  return {
    name,
    handleChange,
    handleSubmit,
  };
};
