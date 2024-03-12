import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../country/Country';
import './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const handleVisited2 = country => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <hr />
      <h3>Visited Countries</h3>
      <div className="visited-countries-container">
        {visitedCountries.map(country => (
          <div key={country.cca2} className="visited-countries">
            <h3>{country.name.common}</h3>
            <img src={country.flags.png} alt="" />
          </div>
        ))}
      </div>
      <div></div>
      <hr />
      <div className="country-container">
        {countries.map(country => (
          <Country
            handleVisited2={handleVisited2}
            country={country}
            key={country.cca2}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
