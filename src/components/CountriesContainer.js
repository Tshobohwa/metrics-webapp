import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CountriesContainer.css';
import { getCountries } from '../redux/countries/countriesSlice';
import CountryItem from './CountryItem';
import LoadingSpinner from './LoadingSpinner';

const CountriesContainer = () => {
  const { countries, isLoading, countriesLoaded } = useSelector(
    (store) => store.countries,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (countriesLoaded) return;
    dispatch(getCountries());
  }, [dispatch, countriesLoaded]);
  return (
    <main className="countries--container__main">
      <h2 className="countries--container__title">SEARCH BY COUNTRY</h2>
      <div className="countries--container">
        {isLoading && <LoadingSpinner />}
        {countries.map((country) => (
          <CountryItem key={country.id} country={country} />
        ))}
      </div>
    </main>
  );
};

export default CountriesContainer;
