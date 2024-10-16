import { UserRound } from 'lucide-react';
import { useAddPlayerForm } from '../hooks/useAddPlayerForm';
import { InputError } from '@/components/errors';
import { cn } from '@/utils';

type AddPlayerProps = {
  label: string;
  initialName?: string;
  onSuccess?: (name: string) => void;
};

export const AddPlayerForm = ({
  label,
  initialName = '',
  onSuccess,
}: AddPlayerProps) => {
  const { name, error, handleChange, handleSubmit } =
    useAddPlayerForm({
      initialName,
      onSuccess,
    });

  return (
    <form
      id="add-player-form"
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <label
        className={cn(
          'flex items-center gap-2 pl-4',
          'font-ubuntu text-lg font-medium tracking-wide text-white',
        )}
        htmlFor="player-input"
      >
        <UserRound strokeWidth={1} />
        <span>{label}</span>
      </label>

      <input
        id="player-input"
        className="rounded-full border-[3px] border-white px-4 py-5 text-white"
        type="text"
        name="player"
        value={name}
        autoFocus
        onChange={handleChange}
      />

      {error && (
        <InputError
          className={cn(
            'absolute left-1/2 top-[calc(100%+10px)] w-max',
            '-translate-x-1/2 rounded-full',
          )}
          message={error}
        />
      )}
    </form>
  );
};
