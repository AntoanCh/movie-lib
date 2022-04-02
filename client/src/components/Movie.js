import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

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
      <div className={clickable ? "image pointer" : "image"}>
        <img src={image} onClick={openDetails} alt="movie cover" />
      </div>
      <div className="movieData">
        <h2 onClick={openDetails} className={clickable ? "pointer" : ""}>
          {name}({premiered})
        </h2>
        <p>
          {genres.join()} | {runtime} minutes
        </p>
        <p>{summary}</p>
        <a href={site}>View official site</a>
        <br />
        <div className="favBtn ">
          <Button size="large" color="primary" variant="outlined">
            Favorites
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
