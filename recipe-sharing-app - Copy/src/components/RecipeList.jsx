import useStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useStore(state => state.filteredRecipes);

  return (
    <ul>
      {filteredRecipes.map((recipe, index) => (
        <li key={index}>{recipe.title}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
