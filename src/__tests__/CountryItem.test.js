import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import CountryItem from '../components/CountryItem';

const mockStore = configureMockStore();
const store = mockStore({});

describe('CountryItem', () => {
  const country = {
    flag: 'test',
    name: 'Spain',
    population: 47000000,
    id: '123',
  };

  it('renders in the document', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CountryItem country={country} />
        </BrowserRouter>
      </Provider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
