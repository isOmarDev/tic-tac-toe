import { X } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { useDialogContext } from './DialogContext';
import { cn } from '@/utils';

export const DialogCloseTrigger = () => {
  const dialogContext = useDialogContext();

  return (
    <Button
      className={cn(
        'absolute right-4 top-4',
        'p-2',
        'rounded-full',
        'hover:bg-gray-50',
      )}
      onClick={dialogContext?.onClose}
    >
      <X size={20} />
    </Button>
  );
};
