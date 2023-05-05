import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const pollutionAPIKey = '19ce3ca00414b15f41f9fc370011f081';

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/independent?status=true',
      );
      if (!response) throw new Error('No respone');
      const data = await response.json();
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

export const getPollutionInfos = createAsyncThunk(
  'countries/getPollutionInfos',
  async (country) => {
    try {
      const { capital, pollutionInfoAvailable } = country;
      if (pollutionInfoAvailable) return { ...country, displayed: true };
      const respone1 = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${capital}&limit=1&appid=${pollutionAPIKey}`,
      );
      if (!respone1) throw new Error('Wrong input');
      const data1 = await respone1.json();
      if (!data1) throw new Error(`Enable to get coordinates of ${capital}`);
      const { lat, lon } = data1[0];
      const respone = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${pollutionAPIKey}`,
      );
      const data = await respone.json();
      return {
        ...country,
        pollutionInfoAvailable: true,
        pollutionInfos: data.list[0].components,
        displayed: true,
      };
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  countries: [],
  searchedCountries: [],
  isLoading: false,
  countriesLoaded: false,
  pollutionInfoLoading: false,
  error: {
    status: false,
    message: '',
  },
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    getDisplayedCountry: (state, { payload }) => {
      const updatedCountries = state.countries.map((country) => {
        if (country.id !== payload) return { ...country, displayed: false };
        return { ...country, displayed: true };
      });
      return { ...state, countries: updatedCountries };
    },
    getSearchedCountries: (state, { payload }) => {
      let searchedCountries = [];
      if (payload !== '') {
        const search = payload.toLowerCase();
        const { countries } = state;
        searchedCountries = countries.filter((country) => {
          const name = country.name.toLowerCase();
          return name.includes(search);
        });
      }
      return { ...state, searchedCountries };
    },
  },
  extraReducers: {
    [getCountries.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: {
        status: false,
        message: '',
      },
    }),
    [getCountries.fulfilled]: (state, { payload }) => {
      const countries = [];
      payload.forEach((country) => {
        countries.push({
          id: country.cca2,
          name: country.name.common,
          capital: country.capital[0],
          latlng: country.capitalInfo.latlng,
          population: country.population,
          flag: country.flags.png,
          displayed: false,
          pollutionInfosAvailable: false,
          pollutionInfos: {},
        });
      });
      return {
        ...state,
        isLoading: false,
        countries,
        countriesLoaded: true,
        error: {
          status: false,
          message: '',
        },
      };
    },
    [getCountries.error]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: {
        status: true,
        message: payload,
      },
    }),
    [getPollutionInfos.pending]: (state) => ({
      ...state,
      pollutionInfoLoading: true,
    }),
    [getPollutionInfos.fulfilled]: (state, { payload }) => {
      const updatedCountries = state.countries.map((country) => {
        if (country.id !== payload.id) return { ...country, displayed: false };
        return { ...payload, pollutionInfosAvailable: true };
      });
      return {
        ...state,
        countries: updatedCountries,
        pollutionInfoLoading: false,
      };
    },
  },
});

export const { getDisplayedCountry, getSearchedCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
