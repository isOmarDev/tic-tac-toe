import { Button } from '@/components/buttons/Button';

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
    <Button className={className} {...props}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Button>
  );
};
