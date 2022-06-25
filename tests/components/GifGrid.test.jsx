import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
  const category = 'One Punch';

  xtest('should mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...')).toBeTruthy();

    // screen.debug();
  });

  test('should mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      { id: 'ABC', title: 'Saitama', url: 'https://localhost/saitama.jpg' },
      { id: 'DEF', title: 'Goku', url: 'https://localhost/Goku.jpg' },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);

    // screen.debug();
  });
});
