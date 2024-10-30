import { useHover } from '@/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import { TooltipProps } from './Tooltip';

export const useTooltip = (
  placement: TooltipProps['placement'] = 'bottom',
) => {
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const {
    isHovered: isVisible,
    handleMouseEnter,
    handleMouseLeave,
  } = useHover();

  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  }, [isVisible]);

  const getTooltipPosition = useMemo(() => {
    const baseTop = coords.top + coords.height / 2;
    const baseLeft = coords.left + coords.width / 2;

    switch (placement) {
      case 'bottom':
        return {
          top: coords.top + coords.height + 10,
          left: baseLeft,
          translate: '-50% 0',
        };
      case 'right':
        return {
          top: baseTop,
          left: coords.left + coords.width + 10,
          translate: '0 -50%',
        };
      case 'left':
        return {
          top: baseTop,
          left: coords.left - 10,
          translate: '-100% -50%',
        };
      case 'top':
        return {
          top: coords.top - 10,
          left: baseLeft,
          translate: '-50% -100%',
        };
      default:
        return {};
    }
  }, [coords, placement]);

  return {
    coords,
    isVisible,
    tooltipRef,
    getTooltipPosition,
    handleMouseEnter,
    handleMouseLeave,
  };
};
