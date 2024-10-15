import { useIsMounted } from '@/hooks/useIsMounted';
import { cn } from '@/utils';

type InputErrorProps = { className?: string; message: string };

export const InputError = ({
  className,
  message,
}: InputErrorProps) => {
  const { isMounted } = useIsMounted();
  return (
    <div
      className={cn(
        'translate-y-2 bg-red-700 px-4 py-2 text-sm text-white opacity-0',
        'transition-transform',
        isMounted && 'translate-y-0 opacity-100',
        className,
      )}
    >
      {message}
    </div>
  );
};
