import { useEffect, useState } from 'react';

import { getGifts } from '../helpers/getGitfs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async () => {
    setImages(await getGifts(category));
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
    return () => {};
  }, []);

  return {
    images,
    isLoading,
  };
};
