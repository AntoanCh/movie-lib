import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = async () => {
    // await axios.post("");
    setFavorite(!favorite);
  };

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
