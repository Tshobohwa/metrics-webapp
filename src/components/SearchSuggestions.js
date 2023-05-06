import './SearchSuggestions.css';
import { useSelector } from 'react-redux';
import SearchSuggestion from './SearchSuggestion';

const SearchSuggestions = () => {
  const { searchedCountries } = useSelector((store) => store.countries);
  return (
    <ul className="suggestions--list">
      {searchedCountries.map((country) => (
        <SearchSuggestion key={country.id} country={country} />
      ))}
    </ul>
  );
};

export default SearchSuggestions;
