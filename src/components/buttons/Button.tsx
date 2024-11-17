import { cn } from '@/utils';

type ButtonProps = {
  variant?: keyof typeof buttonVariants.variants;
  startIcon?: React.JSX.Element;
  endIcon?: React.JSX.Element;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = {
  variants: {
    default: 'bg-white',
    outline: 'border border-cyan-950',
    text: 'bg-transparent',
  },
};

export const Button = ({
  className,
  variant = 'default',
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'group flex overflow-hidden',
        'items-center justify-center gap-[10px]',
        'leading-none tracking-wide text-cyan-950',
        'transition-all',
        buttonVariants.variants[variant],
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
