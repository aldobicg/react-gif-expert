import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory', () => {
  let onNewCategory;
  let component;

  beforeEach(() => {
    onNewCategory = jest.fn();
    component = render(<AddCategory onNewCategory={onNewCategory} />);
  });

  test('should render input element', () => {
    const input = component.getByPlaceholderText('Buscar gifs');
    expect(input).toBeTruthy();
  });

  test('should update input value when typing', () => {
    const input = component.getByPlaceholderText('Buscar gifs');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('should call onNewCategory on form submit', () => {
    const form = component.container.querySelector('form');
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();

    const input = component.getByPlaceholderText('Buscar gifs');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalledWith('test');
  });

  test('should not call onNewCategory if input length is less than or equal to 1', () => {
    const form = component.container.querySelector('form');
    const input = component.getByPlaceholderText('Buscar gifs');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();

    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
