import useStore from './RecipeStore';

function FavouritesList() {
  const { favourites, removeFavourite } = useStore();

  return (
    <div>
      <h2>Favourite Items</h2>
      <ul>
        {favourites.length > 0 ? (
          favourites.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeFavourite(item)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No favourites yet.</p>
        )}
      </ul>
    </div>
  );
}

export default FavouritesList;
