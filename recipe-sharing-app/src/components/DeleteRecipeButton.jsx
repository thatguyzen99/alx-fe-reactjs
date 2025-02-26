import useStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useStore(state => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
