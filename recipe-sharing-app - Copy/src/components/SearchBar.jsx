import useStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useStore(state => state.setSearchTerm);
  const filterRecipes = useStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
