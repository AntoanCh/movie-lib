import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Movie = ({
  image,
  name,
  genres,
  runtime,
  site,
  summary,
  premiered,
  clickable,
}) => {
  const [data, setData] = useState();
  const [favorite, setFavorite] = useState();

  const toggleFavorite = async () => {
    if (!favorite) {
      const newFavorite = await axios.post(
        "/api/favorites",
        {
          name,
          image,
        }
      );
      setFavorite(newFavorite.data.name);
    } else {
      const deleted = await axios.delete(
        `/api/favorites/${name}`
      );
      // console.log(deleted.name);
      setFavorite("");
    }
  };

  // console.log(favorite);

  const fetchData = async () => {
    const fetchedData = await axios.get(
      `/api/favorites/${name}`
    );
    setFavorite(fetchedData.data[0]);
  };
  useEffect(() => {
    if (favorite === undefined) {
      fetchData();
    }
    // console.log(favorite);
  });

  const navigate = useNavigate();
  const openDetails = () => {
    if (clickable) {
      navigate(`/movies/${name}`);
    }
  };
  if (summary) {
    summary = summary.replace(/<[^>]+>/g, "");
  }
  return (
    <div className="movie">
      <div
        className={
          clickable ? "image pointer" : "image"
        }
      >
        <img
          src={image}
          onClick={openDetails}
          alt="movie cover"
        />
      </div>
      <div className="movieData">
        <h2
          onClick={openDetails}
          className={clickable ? "pointer" : ""}
        >
          {name}({premiered})
        </h2>
        <p>
          {genres.join()} | {runtime} minutes
        </p>
        <p>{summary}</p>
        <a href={site}>View official site</a>
        <br />
        <div className="favBtn ">
          <Button
            size="large"
            onClick={toggleFavorite}
            color={
              favorite ? "secondary" : "primary"
            }
            variant="outlined"
          >
            {favorite
              ? "Remove from favorites"
              : "Add to favorites"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Movie;
