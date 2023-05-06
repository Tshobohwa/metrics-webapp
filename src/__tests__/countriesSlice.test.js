import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  getDisplayedCountry,
  getSearchedCountries,
} from '../redux/countries/countriesSlice';

const mockStore = configureMockStore([thunk]);

describe('countriesSlice', () => {
  describe('getDisplayedCountry', () => {
    it('should set displayed to true for the country with the given id and false for others', () => {
      const initialState = {
        countries: [
          { id: 'US', name: 'United States', displayed: false },
          { id: 'CA', name: 'Canada', displayed: false },
        ],
      };
      const store = mockStore({ countries: initialState });

      const expectedActions = [
        { payload: 'CA', type: 'countries/getDisplayedCountry' },
      ];

      store.dispatch(getDisplayedCountry('CA'));

      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getState().countries).toEqual({
        countries: [
          { displayed: false, id: 'US', name: 'United States' },
          { displayed: false, id: 'CA', name: 'Canada' },
        ],
      });
    });
  });

  describe('getSearchedCountries', () => {
    it('should filter the countries by name and update searchedCountries', () => {
      const initialState = {
        countries: [
          { id: 'US', name: 'United States', displayed: false },
          { id: 'CA', name: 'Canada', displayed: false },
        ],
        searchedCountries: [],
      };
      const store = mockStore({ countries: initialState });

      const expectedActions = [
        { type: 'countries/getSearchedCountries', payload: 'uni' },
      ];

      store.dispatch(getSearchedCountries('uni'));

      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getState().countries.searchedCountries).toEqual([]);
    });

    it('should update searchedCountries to an empty array if the payload is an empty string', () => {
      const initialState = {
        countries: [
          { id: 'US', name: 'United States', displayed: false },
          { id: 'CA', name: 'Canada', displayed: false },
        ],
        searchedCountries: [],
      };
      const store = mockStore({ countries: initialState });

      const expectedActions = [
        { type: 'countries/getSearchedCountries', payload: '' },
      ];

      store.dispatch(getSearchedCountries(''));

      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getState().countries.searchedCountries).toEqual([]);
    });
  });
});
