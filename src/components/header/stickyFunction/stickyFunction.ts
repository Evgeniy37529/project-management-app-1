export const handleScroll = (elTopOffset: number, callback: (isSticky: boolean) => void) => {
  if (window.pageYOffset > elTopOffset) {
    callback(true);
  } else {
    callback(false);
  }
};
