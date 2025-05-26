import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useCountryStore from '../store/Store';
import { fetchAllCountries } from '../api/Api.jsx';
import SearchBar from '../components/SearchBar';
import Filter from '../components/filter';
import Controls from '../components/Controls';

const Home = () => {
  const navigate = useNavigate();
  const { countries, setCountries, searchQuery, selectedRegion, sortOption } = useCountryStore();

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchAllCountries();
      setCountries(data);
    };
    loadCountries();
  }, [setCountries]);

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((country) =>
      selectedRegion ? country.region === selectedRegion : true
    )
    .sort((a, b) => {
      if (sortOption === 'name-asc') return a.name.common.localeCompare(b.name.common);
      if (sortOption === 'name-desc') return b.name.common.localeCompare(a.name.common);
      if (sortOption === 'population-asc') return a.population - b.population;
      if (sortOption === 'population-desc') return b.population - a.population;
      return 0;
    });

  return (
    <div className="container">
      <h1>Countries Explorer</h1>
      <div className="controls">
        <SearchBar />
        <Filter />
        <Controls />
      </div>
      <div className="grid-container">
        {filteredCountries.map((country) => (
          <div
            key={country.cca3}
            className="card"
            onClick={() => navigate(`/country/${country.cca3}`)}
          >
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className="flag"
            />
            <h2>{country.name.common}</h2>
            <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;