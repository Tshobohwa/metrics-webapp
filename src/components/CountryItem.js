import { Link } from 'react-router-dom';
import './CountryItem.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import right from '../assets/right.png';
import { getDisplayedCountry } from '../redux/countries/countriesSlice';

const CountryItem = ({ country }) => {
  const [isloaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const {
    flag, name, population, id,
  } = country;
  const dispatch = useDispatch();
  const handleGetDisplayedCountry = () => {
    dispatch(getDisplayedCountry(id));
  };
  return (
    <div className={`country--item ${isloaded && 'loaded'}`}>
      <Link to="./details" onClick={handleGetDisplayedCountry}>
        <div className="country--image__container">
          <img className="country--image" src={flag} alt={`${name} flag`} />
          <button className="country--item--button" type="button">
            <img className="right--icon" src={right} alt="more" />
          </button>
        </div>
        <div className="country--text__container">
          <h3 className="country-name">{name}</h3>
          <h4 className="country-population">{`${population} people`}</h4>
        </div>
      </Link>
    </div>
  );
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
