import { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]); // Steps (cooking instructions)

  const handleIngredientChange = (event) => {
    setIngredients(event.target.value.split(',').map((item) => item.trim()));
  };

  const handleStepsChange = (event) => {
    setSteps(event.target.value.split('.').map((step) => step.trim())); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { title, image, ingredients, steps };
    onAddRecipe(newRecipe);
    setTitle('');
    setImage('');
    setIngredients([]);
    setSteps([]);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Add a New Recipe</h2>
      
      <input 
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />

      <input 
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />

      <textarea 
        placeholder="Ingredients (comma separated)"
        value={ingredients.join(', ')}
        onChange={handleIngredientChange}
        className="w-full p-2 border rounded mb-2"
      />

      <textarea 
        placeholder="Steps (separate each step with a period)"
        value={steps.join('. ')}
        onChange={handleStepsChange}
        className="w-full p-2 border rounded mb-2"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
