import PropTypes from 'prop-types';
import './PollutionInfos.css';
import LoadingSpinner from './LoadingSpinner';

const PollutionInfos = ({ pollutionInfos, pollutionInfosAvailable }) => {
  const {
    co, no, no2, o3, so2, pm10, nh3,
  } = pollutionInfos;
  const pm25 = pollutionInfos.pm2_5;
  return (
    <div className="pollution--infos__container">
      <h3 className="pollution--info__title">POLLUTION INFOS</h3>
      {!pollutionInfosAvailable ? (
        <LoadingSpinner />
      ) : (
        <ul className="pollution--infos__list">
          <li className="pollution--info">
            <span className="pollution--element">Carbone monoxyde </span>
            <p className="pollution--element__value">
              {co.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">Nitrogen monoxyde </span>
            <p className="pollution--element__value">
              {no.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">Nitrogen dioxyde </span>
            <p className="pollution--element__value">
              {no2.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">Ozone </span>
            <p className="pollution--element__value">
              {o3.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">Sulphur dioxide </span>
            <p className="pollution--element__value">
              {so2.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">Fine particles matter</span>
            <p className="pollution--element__value">
              {pm25.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">
              Coarse particulate matter
            </span>
            <p className="pollution--element__value">
              {pm10.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
          <li className="pollution--info">
            <span className="pollution--element">Ammonia </span>
            <p className="pollution--element__value">
              {nh3.toFixed(2)}
              &mu;g/m
              <sup>3</sup>
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

PollutionInfos.propTypes = {
  pollutionInfos: PropTypes.shape({
    co: PropTypes.number,
    no: PropTypes.number,
    no2: PropTypes.number,
    o3: PropTypes.number,
    so2: PropTypes.number,
    pm2_5: PropTypes.number,
    pm10: PropTypes.number,
    nh3: PropTypes.number,
  }).isRequired,
  pollutionInfosAvailable: PropTypes.bool.isRequired,
};

export default PollutionInfos;
