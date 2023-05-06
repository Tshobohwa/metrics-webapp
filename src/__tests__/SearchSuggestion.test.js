import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchSuggestion from '../components/SearchSuggestion';

const mockStore = configureStore([]);

describe('SearchSuggestion', () => {
  let store;
  const country = { name: 'Canada', id: 'ca' };

  beforeEach(() => {
    store = mockStore({});
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SearchSuggestion country={country} />
          </Provider>
        </BrowserRouter>,
      );
    });
  });

  it('renders the country name', () => {
    const countryName = screen.getByText('Canada');
    expect(countryName).toBeInTheDocument();
  });

  it('renders the "right" icon', () => {
    const rightIcon = screen.getByAltText('see info');
    expect(rightIcon).toBeInTheDocument();
  });

  it('dispatches "getDisplayedCountry" action when the link is clicked', () => {
    act(() => {
      const link = screen.getByRole('link');
      link.click();
    });
    expect(store.getActions()).toEqual([
      { type: 'countries/getDisplayedCountry', payload: 'ca' },
    ]);
  });
});
