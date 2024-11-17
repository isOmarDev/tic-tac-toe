import { Link } from 'react-router-dom';
import { Transition } from '@/components/animation';
import { cn } from '@/utils';

export const NotFound = () => {
  return (
    <div
      className={cn(
        'flex',
        'flex-col items-center justify-center',
        'h-screen',
        'bg-red-50',
      )}
    >
      <Transition translateX={-20} duration={300} delay={50}>
        <h1 className="-rotate-12 text-[60px] font-semibold leading-[0.9]">
          page not found
        </h1>
      </Transition>

      <Transition translateY={16} duration={300} delay={50}>
        <Link
          className={cn(
            'flex',
            'items-center justify-center gap-2',
            'mt-16 px-4 py-5',
            'w-32',
            'rounded-full',
            'text-left font-medium text-white',
            'bg-rose-500',
            'transition-colors duration-150 ease-linear',
            'hover:bg-rose-600',
          )}
          to="/"
          replace
        >
          Go Back
        </Link>
      </Transition>
    </div>
  );
};
