import './HomeHeader.css';
import earth from '../assets/earth.png';

const HomeHeader = () => (
  <div className="home--header__container">
    <div className="header--image__container">
      <img src={earth} alt="earth map" className="header--image" />
    </div>
    <div className="header--comment__container">
      <h1 className="header--comment__title">AIR POLLUTION ALERT</h1>
    </div>
  </div>
);

export default HomeHeader;
