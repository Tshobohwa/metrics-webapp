import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import SearchSuggestions from '../components/SearchSuggestions';

describe('SearchSuggestions', () => {
  const mockStore = configureStore();
  const store = mockStore({
    countries: {
      searchedCountries: [
        { id: '1', name: 'Country 1' },
        { id: '2', name: 'Country 2' },
      ],
    },
  });

  it('renders the list of search suggestions', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchSuggestions />
        </BrowserRouter>
      </Provider>,
    );
    const searchSuggestionsList = screen.getByRole('list');
    expect(searchSuggestionsList).toBeInTheDocument();
  });
});
