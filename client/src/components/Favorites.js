import { useEffect, useState } from "react";
import axios from "axios";

const Favorites = () => {
  const [favorites, setFavorites] = useState();
  const fetchData = async () => {
    const { data } = await axios.get(
      "/api/favorites"
    );
    setFavorites(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <h1>Your Favorites</h1>
    </div>
  );
};

export default Favorites;
