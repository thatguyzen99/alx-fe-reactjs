import { useState } from 'react';
import useStore from './recipeStore';

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState('');
  const addRecipe = useStore(state => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name: recipe });
    setRecipe('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
