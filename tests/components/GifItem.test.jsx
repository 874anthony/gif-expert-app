import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en el componente <GifItem />', () => {
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  xtest('Debe de mostrar el componente correctamente', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  xtest('should show the image with the URL and ALT indicated', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();

    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
