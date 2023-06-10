import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { waitFor } from '@testing-library/react';

describe('useFetchGifs Hook', () => {
  test('should return the initial state', async () => {
    const { result, waitFor } = renderHook(() => useFetchGifs('funny'));
    const { images, isLoading } = result.current;
    expect(images).toEqual([]);
    expect(isLoading).toBeTruthy();
  });
  test('should return an array of images & isLoading in False', async () => {
    const { result } = renderHook(() => useFetchGifs('sadness'));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
