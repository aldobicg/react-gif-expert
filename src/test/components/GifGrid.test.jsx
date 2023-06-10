import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('GifGrid component', () => {
  test('loads the loading text when isLoading is true', async () => {
    const category = 'Test Category';
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText(/Cargando .../i)).toBeTruthy();
  });

  test('renders the category name properly', async () => {
    const category = 'Test Category';
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: false,
    });
    jest.mock('../../hooks/useFetchGifs', () => ({
      useFetchGifs: jest.fn(() => mockedData),
    }));

    render(<GifGrid category={category} />);

    expect(screen.getByText(/Test Category/i));
  });

  test('renders the images properly', async () => {
    const category = 'Test Category';
    useFetchGifs.mockReturnValue({
      images: [
        {
          id: '1',
          title: 'Gif 1',
          url: 'https://example.com/gif1.gif',
        },
        {
          id: '2',
          title: 'Gif 2',
          url: 'https://example.com/gif2.gif',
        },
      ],
      isLoading: false,
    });
    jest.mock('../../hooks/useFetchGifs', () => ({
      useFetchGifs: jest.fn(() => mockedData),
    }));

    render(<GifGrid category={category} />);
    expect(screen.getByText('Gif 1'));
    expect(screen.getByText('Gif 2'));
    expect(screen.getByAltText('Gif 1'));
    expect(screen.getByAltText('Gif 2'));
  });
});
