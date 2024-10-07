import {
  MoveUp,
  SquareMousePointer,
  Minus,
  ToggleLeft,
  Scaling,
  SquareMinus,
} from 'lucide-react';

const ICON_SIZE = 20;

export const navigation = [
  {
    title: 'Scroll to top',
    path: 'scroll-to-top',
    icon: <MoveUp size={ICON_SIZE} />,
  },
  {
    title: 'Mouse position',
    path: 'mouse-position',
    icon: <SquareMousePointer size={ICON_SIZE} />,
  },
  {
    title: 'Progress bar',
    path: 'progress-bar',
    icon: <Minus size={ICON_SIZE} />,
  },
  { title: 'Switch', path: 'switch', icon: <ToggleLeft /> },
  {
    title: 'Resize panel',
    path: 'resize-panel',
    icon: <Scaling size={ICON_SIZE} />,
  },
  {
    title: 'Intersection observer',
    path: 'intersection-observer',
    icon: <SquareMinus />,
  },
];
