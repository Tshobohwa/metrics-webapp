import './HomeSearchBar.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import search from '../assets/search.png';
import { getSearchedCountries } from '../redux/countries/countriesSlice';
import SearchSuggestions from './SearchSuggestions';

const HomeSearchBar = () => {
  const [research, setResearch] = useState('');
  const dispatch = useDispatch();
  const handleResearchInputChange = (e) => {
    setResearch(e.target.value);
  };
  useEffect(() => {
    dispatch(getSearchedCountries(research));
  }, [research, dispatch]);
  return (
    <nav className="search--bar">
      <input
        placeholder="Search by country"
        className="search--bar__input"
        onChange={handleResearchInputChange}
      />
      <button className="search--bar__button" type="button">
        <img src={search} alt="search" />
      </button>
      <SearchSuggestions />
    </nav>
  );
};

export default HomeSearchBar;
