import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../GifExpertApp';

describe('GifExpertApp', () => {
  test('should match snapshot', () => {
    const component = render(<GifExpertApp />);
    expect(component).toMatchSnapshot();
  });
  test('should render component and add category', () => {
    const component = render(<GifExpertApp />);
    // check that initial category exists
    const initialCategory = screen.getByText('Simpsons');
    expect(initialCategory);

    // add new category
    const addCategoryInput = screen.queryByPlaceholderText('Buscar gifs');
    const form = component.container.querySelector('form');
    fireEvent.change(addCategoryInput, { target: { value: 'Spiderman' } });
    fireEvent.submit(form);

    // check that new category is added
    const newCategory = screen.getByText('Spiderman');
    expect(newCategory);
  });
});
