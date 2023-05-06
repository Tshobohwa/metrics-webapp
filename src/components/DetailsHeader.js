import './DetailsHeader.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import back from '../assets/back.png';

const DetailsHeader = ({ country }) => {
  const { name, flag } = country;
  return (
    <header className="details--header__container">
      <nav className="details--header__nav">
        <Link to="/">
          <button className="details--header__back" type="button">
            <img src={back} alt="back" className="details--header__icon" />
            {' '}
            <span className="details--header__span">Back</span>
          </button>
        </Link>
      </nav>
      <div className="details--image__container">
        <img src={flag} alt="earth map" className="details--header__image" />
      </div>
      <div className="details--comment__container">
        <h1 className="details--comment__title">{name}</h1>
      </div>
    </header>
  );
};

DetailsHeader.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsHeader;
