import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils';

export const NotFound = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1 className="w-min text-[90px] font-black leading-[0.9]">
        <span className="text-[50px] font-semibold">
          Not
        </span>{' '}
        Found
      </h1>

      <Link
        className={cn(
          'mt-6 flex w-[276px] gap-2 rounded-full px-4 py-4',
          'bg-rose-400 text-left text-sm font-medium text-white',
          'transition-colors duration-150 ease-linear',
          'hover:bg-rose-300',
        )}
        to="/"
        replace
      >
        <MoveLeft size={20} />
        <span>Go Back</span>
      </Link>
    </div>
  );
};
