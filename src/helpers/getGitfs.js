export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ryVU0JiKM7FER3MtfDZdtCq9ECNNltHH&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const gifs = data.map(({ id, title, images: { downsized_medium } }) => ({
    id,
    title,
    url: downsized_medium.url,
  }));
  return gifs;
};