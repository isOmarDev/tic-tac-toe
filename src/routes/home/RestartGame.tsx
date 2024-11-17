import { RotateCw } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@/components/overlay/dialog';
import { Tooltip } from '@/components/overlay/tooltip';
import { useDisclosure } from '@/hooks';
import { useDispatch } from '@/store';
import { resetScoreboard } from '@/features/scoreboard/slices';
import { resetGameboard } from '@/features/gameboard/slices';
import { cn } from '@/utils';

export const RestartGame = () => {
  const { isOpen, open, close } = useDisclosure();
  const dispatch = useDispatch();

  const handleResetGame = () => {
    dispatch(resetScoreboard());
    dispatch(resetGameboard());
    close();
  };

  return (
    <>
      <Tooltip
        className="text-xs tracking-widest"
        label="Restart Game"
      >
        <Button
          className="group rounded-full p-5 shadow-sm hover:shadow-md"
          startIcon={
            <RotateCw
              className={cn(
                'group-hover:rotate-90',
                'transition-transform duration-75',
              )}
            />
          }
          onClick={open}
        />
      </Tooltip>

      <Dialog placement="top" isOpen={isOpen} onClose={close}>
        <DialogContent className="h-[250px]">
          <DialogHeader>Restart Game</DialogHeader>
          <DialogBody>
            Do you want to restart the game?
          </DialogBody>
          <DialogFooter>
            <Button
              className={cn(
                'p-4',
                'h-[58px] w-full',
                'rounded-full border border-gray-200',
                'hover:bg-gray-50',
              )}
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              className={cn(
                'p-4',
                'h-[58px] w-full',
                'rounded-full',
                'text-white',
                'bg-cyan-950',
                'hover:bg-cyan-900',
              )}
              onClick={handleResetGame}
            >
              Restart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
