import { render, screen, fireEvent } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  const submitForm = (input, form, categoryValue) => {
    fireEvent.change(input, { target: { value: categoryValue } });
    fireEvent.submit(form);
  };

  test('should not render more gifs if category already exists', () => {
    const categoryValue = 'One Punch';

    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    submitForm(input, form, categoryValue);

    expect(screen.getAllByText(categoryValue)).toHaveLength(1);

    submitForm(input, form, categoryValue);

    expect(screen.getAllByText(categoryValue)).toHaveLength(1);
  });
});
