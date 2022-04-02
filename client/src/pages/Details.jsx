import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import defaultImg from "../default.jpg";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";

import Movie from "../components/Movie";

const Details = ({ fetchedData }) => {
  const [movie, setMovie] = useState();
  const [rating, setRating] = useState(1);

  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows?q=${params.movieName}`
    );
    setMovie(data);
  };

  useEffect(() => {
    if (!movie) {
      fetchMovie();
    }
  }, []);
  console.log(movie);
  const params = useParams();

  return (
    <>
      {movie ? (
        <Movie
          clickable={false}
          image={movie.image ? movie.image.medium : defaultImg}
          name={movie.name}
          genres={movie.genres}
          runtime={movie.averageRuntime}
          site={movie.officialSite}
          summary={movie.summary}
          premiered={movie.premiered}
          key={movie.id}
        />
      ) : (
        <h1>Loading...</h1>
      )}

      <div className="rating">
        <h2>Your Review</h2>
        <Rating
          name="simple-controlled"
          value={rating}
          size="large"
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </div>
      <div className="notes">
        <TextField
          id="Note"
          label="Your private notes and comments for movie"
          multiline
          rows={5}
          variant="outlined"
          fullWidth
        />
      </div>
    </>
  );
};

export default Details;
