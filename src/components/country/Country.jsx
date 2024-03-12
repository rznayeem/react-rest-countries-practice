import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisited2 }) => {
  const { name, capital, languages, area, flags } = country;

  const [visited, setVisited] = useState([false]);
  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <div className="country-img">
        <img src={flags.png} alt="" />
      </div>
      <h3>Name: {name.common}</h3>
      <h4>Capital: {capital}</h4>
      <p>Area: {area}</p>
      <button
        onClick={() => {
          handleVisited();
          handleVisited2(country);
        }}
      >
        {visited ? 'Visit' : 'Visited'}
      </button>
    </div>
  );
};

export default Country;
