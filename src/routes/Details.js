import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DetailsHeader from '../components/DetailsHeader';
import { getPollutionInfos } from '../redux/countries/countriesSlice';
import PollutionInfos from '../components/PollutionInfos';

const Details = () => {
  const countries = useSelector((store) => store.countries.countries);
  const dispatch = useDispatch();
  const displayedCountry = countries.find((country) => country.displayed);
  useEffect(() => {
    dispatch(getPollutionInfos(displayedCountry));
  }, []);
  const {
    flag, name, pollutionInfos, pollutionInfosAvailable,
  } = displayedCountry;
  return (
    <div>
      <DetailsHeader country={{ name, flag }} />
      <PollutionInfos
        pollutionInfos={pollutionInfos}
        pollutionInfosAvailable={pollutionInfosAvailable}
      />
    </div>
  );
};

export default Details;
