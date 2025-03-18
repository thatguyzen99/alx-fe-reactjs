import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Recipe Sharing Platform</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}
export default App;
