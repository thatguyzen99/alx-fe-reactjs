import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <p className="text-center text-red-500">Recipe not found!</p>;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-700 mt-2">{recipe.summary}</p>
      <h2 className="text-2xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc ml-6 text-gray-700">
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-4">Instructions:</h2>
      <p className="text-gray-700">{recipe.instructions}</p>
    </div>
  );
};
export default RecipeDetail;