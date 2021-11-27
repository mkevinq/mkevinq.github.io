export const isInView = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();

  return (
    rect.left >= 0 &&
    rect.top >= 0 &&
    rect.right <= window.innerWidth &&
    rect.bottom <= window.innerHeight
  );
};
