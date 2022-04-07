import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState();
  const fetchData = async () => {
    const { data } = await axios.get(
      "/api/favorites"
    );
    setFavorites(data);
    // console.log(data);
  };
  useEffect(() => {
    if (!favorites) {
      fetchData();
    }
  });
  const navigate = useNavigate();

  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="favorites">
        {favorites ? (
          favorites.map((favorite) => (
            <img
              key={favorite._id}
              style={{
                margin: "5px",
              }}
              className="pointer"
              onClick={() => {
                navigate(
                  `/movies/${favorite.name}`
                );
              }}
              src={favorite.image}
            ></img>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
