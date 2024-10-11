import { cn } from '@/utils';

type StepButtonProps = {
  startIcon?: React.JSX.Element;
  endIcon?: React.JSX.Element;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const StepButton = ({
  className,
  startIcon,
  endIcon,
  children,
  ...props
}: StepButtonProps) => {
  return (
    <button
      className={cn(
        'group flex items-center justify-center',
        'overflow-hidden rounded-full bg-white font-semibold text-cyan-950',
        'transition-all',
        className,
      )}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};
