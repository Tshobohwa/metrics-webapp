import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './SearchSuggestion.css';
import { useDispatch } from 'react-redux';
import right from '../assets/right.png';
import { getDisplayedCountry } from '../redux/countries/countriesSlice';

const SearchSuggestion = ({ country }) => {
  const { name, id } = country;
  const dispatch = useDispatch();
  const handleGetDisplayedCountry = () => {
    dispatch(getDisplayedCountry(id));
  };
  return (
    <li className="suggestion--li">
      <Link to="./details" onClick={handleGetDisplayedCountry}>
        <div className="suggestion--containt">
          <p className="suggestion-name">{name}</p>
          <img src={right} alt="see info" className="suggestion--icon" />
        </div>
      </Link>
    </li>
  );
};

SearchSuggestion.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchSuggestion;
