import create from 'zustand';

const useStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useStore;
