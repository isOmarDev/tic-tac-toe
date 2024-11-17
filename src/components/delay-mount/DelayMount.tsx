import { useIsMounted } from '@/hooks';

type DelayMountProps = {
  delay?: number;
  children: React.ReactNode;
};

export const DelayMount = ({
  delay = 150,
  children,
}: DelayMountProps) => {
  const { isMounted } = useIsMounted(delay);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};
