import React from 'react';
import { render } from '@testing-library/react';
import PollutionInfos from '../components/PollutionInfos';

describe('PollutionInfos', () => {
  const pollutionInfos = {
    co: 0.5,
    no: 5.2,
    no2: 9.1,
    o3: 0.2,
    so2: 1.5,
    pm2_5: 3.8,
    pm10: 7.4,
    nh3: 0.7,
  };
  const pollutionInfosAvailable = true;

  it('renders without errors', () => {
    const { getByText } = render(
      <PollutionInfos
        pollutionInfos={pollutionInfos}
        pollutionInfosAvailable={pollutionInfosAvailable}
      />,
    );
    expect(getByText('POLLUTION INFOS')).toBeInTheDocument();
    expect(getByText('Carbone monoxyde')).toBeInTheDocument();
    expect(getByText('Nitrogen monoxyde')).toBeInTheDocument();
    expect(getByText('Nitrogen dioxyde')).toBeInTheDocument();
    expect(getByText('Ozone')).toBeInTheDocument();
    expect(getByText('Sulphur dioxide')).toBeInTheDocument();
    expect(getByText('Fine particles matter')).toBeInTheDocument();
    expect(getByText('Coarse particulate matter')).toBeInTheDocument();
    expect(getByText('Ammonia')).toBeInTheDocument();
  });
});
