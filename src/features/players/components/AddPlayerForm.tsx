import { UserRound } from 'lucide-react';
import { InputError } from '@/components/errors';
import { useAddPlayerForm } from '../hooks/useAddPlayerForm';
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
  const { name, error, inputRef, handleChange, handleSubmit } =
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
          'flex',
          'items-center gap-2',
          'pl-4',
          'text-xl leading-none tracking-widest text-white',
        )}
        htmlFor="player-input"
      >
        <UserRound strokeWidth={1} />
        <span>{label}</span>
      </label>

      <input
        ref={inputRef}
        id="player-input"
        className={cn(
          'px-5 py-5',
          'h-[72px]',
          'rounded-full border-[3px] border-white',
          'tracking-widest text-white',
          'focus:border-red-100',
          'transition-colors',
        )}
        type="text"
        name="player"
        value={name}
        autoComplete="off"
        onChange={handleChange}
      />

      {error && (
        <InputError
          className={cn(
            'absolute left-1/2 top-[calc(100%+15px)]',
            'px-5 py-3',
            'w-max',
            'rounded-full',
            'text-xs leading-none tracking-widest',
            '-translate-x-1/2',
          )}
          message={error}
        />
      )}
    </form>
  );
};
