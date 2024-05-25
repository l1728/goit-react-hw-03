const SearchBox = ({ searchQuery, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={searchQuery}
      onChange={e => handleSearch(e.target.value)}
    />
  );
};

export default SearchBox;
