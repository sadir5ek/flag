import useCountryStore from '../store/Store.jsx';

function Controls() {
  const { sortOption, setSortOption } = useCountryStore();
  const options = [
    { value: 'name-asc', label: 'A-Z' },
    { value: 'name-desc', label: 'Z-A' },
    { value: 'population-asc', label: 'Pop. Low-High' },
    { value: 'population-desc', label: 'Pop. High-Low' },
  ];

  return (
    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="border p-2 rounded w-full sm:w-1/4"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Controls;