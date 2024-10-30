import { cn } from '@/utils';

type ButtonProps = {
  startIcon?: React.JSX.Element;
  endIcon?: React.JSX.Element;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'group flex',
        'items-center justify-center gap-2',
        'leading-none tracking-wide text-cyan-950',
        'bg-white',
        'overflow-hidden',
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
