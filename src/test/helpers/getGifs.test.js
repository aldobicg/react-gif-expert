import { getGifts } from '../../helpers/getGitfs';

describe('getGifts', () => {
  it('should return an array of 10 gifs', async () => {
    const gifs = await getGifts('cats');
    expect(gifs).toHaveLength(10);
  });

  it('should return an array of objects with id, title, and url properties', async () => {
    const gifs = await getGifts('dogs');
    expect(gifs[0]).toHaveProperty('id');
    expect(gifs[0]).toHaveProperty('title');
    expect(gifs[0]).toHaveProperty('url');
  });
});
