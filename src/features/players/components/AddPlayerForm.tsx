import { useAddPlayerForm } from './useAddPlayerForm';

type AddPlayerProps = {
  label: string;
  initialName?: string;
  onAddPlayer: (name: string) => void;
};

export const AddPlayerForm = ({
  label,
  initialName = '',
  onAddPlayer,
}: AddPlayerProps) => {
  const { name, handleChange, handleSubmit } = useAddPlayerForm({
    initialName,
    onAddPlayer,
  });

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <label
        className="pl-2 font-ubuntu text-xl font-medium tracking-wide text-white"
        htmlFor="player"
      >
        {label}
      </label>

      <input
        id="player"
        className="rounded-full border-[3px] border-white px-4 py-5 text-white"
        type="text"
        name="player"
        value={name}
        onChange={handleChange}
      />
    </form>
  );
};
