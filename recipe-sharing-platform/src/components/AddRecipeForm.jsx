import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) {
      setError('All fields are required');
      return;
    }
    console.log({ title, ingredients, instructions });
    setError('');
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-4">Add a New Recipe</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form className="bg-white p-4 shadow-md rounded-md" onSubmit={handleSubmit}>
        <label className="block mb-2">Recipe Title:</label>
        <input type="text" className="w-full border p-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} />
        
        <label className="block mt-4 mb-2">Ingredients:</label>
        <textarea className="w-full border p-2 rounded" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        
        <label className="block mt-4 mb-2">Instructions:</label>
        <textarea className="w-full border p-2 rounded" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded w-full">Submit</button>
      </form>
    </div>
  );
};
export default AddRecipeForm;
