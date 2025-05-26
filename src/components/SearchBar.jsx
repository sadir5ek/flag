import useCountryStore from '../store/Store.jsx';

function SearchBar() {
  const { searchQuery, setSearchQuery } = useCountryStore();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search countries..."
      className="border p-2 rounded w-full sm:w-1/3"
    />
  );
}

export default SearchBar;