import { DoorClosed, DoorOpen } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { Tooltip } from '@/components/overlay/tooltip';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@/components/overlay/dialog';
import { useDisclosure, useHover } from '@/hooks';
import { useDispatch } from '@/store';
import { resetGame } from '@/store/globalSlices';
import { resetPlayers } from '@/features/players/slices';
import { resetGameboard } from '@/features/gameboard/slices';
import { resetScoreboard } from '@/features/scoreboard/slices';
import { cn } from '@/utils';

export const ExitGame = () => {
  const { isOpen, open, close } = useDisclosure();

  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useHover();

  const dispatch = useDispatch();

  const handleExitGame = () => {
    dispatch(resetGame());
    dispatch(resetPlayers());
    dispatch(resetScoreboard());
    dispatch(resetGameboard());
    close();
  };

  return (
    <>
      <Tooltip
        className="text-xs tracking-widest"
        label="Exit Game"
      >
        <Button
          className="rounded-full p-5 shadow-sm hover:shadow-md"
          startIcon={isHovered ? <DoorOpen /> : <DoorClosed />}
          onClick={open}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </Tooltip>

      <Dialog placement="top" isOpen={isOpen} onClose={close}>
        <DialogContent className="h-[250px]">
          <DialogHeader>Exit Game</DialogHeader>
          <DialogBody>Do you wish to exit the game?</DialogBody>
          <DialogFooter>
            <Button
              className={cn(
                'p-5',
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
                'p-5',
                'h-[58px] w-full',
                'rounded-full',
                'text-white',
                'bg-cyan-950',
                'hover:bg-cyan-900',
              )}
              onClick={handleExitGame}
            >
              Exit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
