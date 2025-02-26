import { useState } from 'react';
import useStore from './recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useStore(state => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipeId, { title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
