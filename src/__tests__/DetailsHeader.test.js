import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsHeader from '../components/DetailsHeader';

describe('DetailsHeader', () => {
  const country = {
    name: 'Test Country',
    flag: 'https://test.com/flag.png',
  };

  it('renders in the document', () => {
    const { container } = render(
      <BrowserRouter>
        <DetailsHeader country={country} />
      </BrowserRouter>,
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
