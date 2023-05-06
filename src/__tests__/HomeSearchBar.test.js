import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import HomeSearchBar from '../components/HomeSearchBar';

describe('HomeSearchBar component', () => {
  const mockStore = configureStore([]);
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      countries: {
        searchedCountries: [],
      },
    });
    component = render(
      <Provider store={store}>
        <HomeSearchBar />
      </Provider>,
    );
  });

  it('should render the search bar and button', () => {
    const inputElement = component.getByPlaceholderText('Search by country');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = component.getByAltText('search');
    expect(buttonElement).toBeInTheDocument();
  });
});
