import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('tests on <AddCategory />', () => {
  xtest('should cambiar el valor de la caja de texto (input)', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });

    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  xtest('should llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    // screen.debug();
  });

  test('should not call onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input);
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();

    // screen.debug();
  });
});
