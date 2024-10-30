import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  createPortalWrapper,
  hasChildElements,
} from './helpers';

type ReactPortalType = {
  wrapperId?: string;
  domNode?: Element;
  children: ReactNode;
};

export const Portal = ({
  wrapperId = 'portal-root',
  domNode,
  children,
}: ReactPortalType) => {
  const [portalNode, setPortalNode] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    let wrapper = document.getElementById(wrapperId);

    if (!wrapper) {
      wrapper = createPortalWrapper(wrapperId, domNode);
    }

    setPortalNode(wrapper);

    return () => {
      if (
        wrapper &&
        !hasChildElements(wrapper) &&
        wrapper.parentElement
      ) {
        wrapper.parentElement.removeChild(wrapper);
      }
    };
  }, [domNode, wrapperId]);

  if (!portalNode) return null;

  return createPortal(children, portalNode);
};
