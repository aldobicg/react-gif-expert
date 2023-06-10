import React from 'react';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('GifItem', () => {
  const title = 'Test Title';
  const url = 'https://test.url';
  it('should render correctly with given props', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toContain(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toContain(url);
    expect(alt).toContain(alt);
  });
  it('debe de mostart el titulo', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
