export const createPortalWrapper = (
  wrapperId: string,
  domNode: Element = document.body,
) => {
  const wrapperElement = document.createElement('div');

  wrapperElement.setAttribute('id', wrapperId);
  domNode.appendChild(wrapperElement);

  return wrapperElement;
};

export const hasChildElements = (
  element: HTMLElement,
): boolean => {
  if (element && element.hasChildNodes()) {
    const childElements = Array.from(element.childNodes).filter(
      (node) => node.nodeType === Node.ELEMENT_NODE,
    );

    if (childElements.length > 0) {
      return true;
    }
  }

  return false;
};
