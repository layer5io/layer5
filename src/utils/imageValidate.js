export const checkImageUrlValidity = async (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      // Check if the image loaded successfully
      resolve(true);
    };

    img.onerror = () => {
      // Handle the case where the image could not be loaded
      resolve(false);
    };
  });
};
