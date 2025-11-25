const getResponsiveImageUrl = (imagesMap = {}) => {
  const width = window.innerWidth;

  if (width <= 600 && imagesMap.sm) {
    return imagesMap.sm;
  }
  if (width <= 1024 && imagesMap.md) {
    return imagesMap.md;
  }
  return imagesMap.lg || imagesMap.md || imagesMap.sm;
};

export default getResponsiveImageUrl;
