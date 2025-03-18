import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [errors, setErrors] = useState({}); // State to store validation errors

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!image.trim()) newErrors.image = "Image URL is required.";
    if (ingredients.length === 0)
      newErrors.ingredients = "At least one ingredient is required.";
    if (steps.length === 0) newErrors.steps = "At least one step is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleIngredientChange = (event) => {
    setIngredients(event.target.value.split(",").map((item) => item.trim()));
  };

  const handleStepsChange = (event) => {
    setSteps(event.target.value.split(".").map((step) => step.trim()));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return; // Stop submission if validation fails

    const newRecipe = { title, image, ingredients, steps };
    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setImage("");
    setIngredients([]);
    setSteps([]);
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-lg shadow-md"
    >
      <h2 className="text-lg font-bold mb-2">Add a New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      {errors.image && <p className="text-red-500">{errors.image}</p>}

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients.join(", ")}
        onChange={handleIngredientChange}
        className="w-full p-2 border rounded mb-2"
      />
      {errors.ingredients && (
        <p className="text-red-500">{errors.ingredients}</p>
      )}

      <textarea
        placeholder="Steps (separate each step with a period)"
        value={steps.join(". ")}
        onChange={handleStepsChange}
        className="w-full p-2 border rounded mb-2"
      />
      {errors.steps && <p className="text-red-500">{errors.steps}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
