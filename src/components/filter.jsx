import useCountryStore from '../store/Store.jsx';

function Filter() {
  const { selectedRegion, setSelectedRegion } = useCountryStore();
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <select
      value={selectedRegion}
      onChange={(e) => setSelectedRegion(e.target.value === 'All' ? '' : e.target.value)}
      className="border p-2 rounded w-full sm:w-1/4"
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}

export default Filter;