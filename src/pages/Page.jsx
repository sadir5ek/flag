import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCountryByCode } from '../api/Api.jsx';

const Page = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const loadCountry = async () => {
      const data = await fetchCountryByCode(code);
      setCountry(data);
    };
    loadCountry();
  }, [code]);

  return (
    <div className="container">
      <button
        className="back-button"
        onClick={() => navigate('/')}
      >
        Back
      </button>
      {country ? (
        <div className="country-card">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="country-flag"
          />
          <h2>{country.name.common}</h2>
          <div className="country-details">
            <p><strong>Official Name:</strong> {country.name.official}</p>
            <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p>
              <strong>Currencies:</strong>{' '}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(', ')
                : 'N/A'}
            </p>
            <p>
              <strong>Languages:</strong>{' '}
              {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
            </p>
            <p><strong>Timezones:</strong> {country.timezones?.join(', ') || 'N/A'}</p>
            <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default Page;