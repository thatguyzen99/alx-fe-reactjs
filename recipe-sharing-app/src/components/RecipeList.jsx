import useStore from './recipeStore';

const RecipeList = () => {
  const recipes = useStore(state => state.recipes);

  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default RecipeList;
