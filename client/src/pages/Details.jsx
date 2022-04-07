import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import defaultImg from "../default.jpg";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";

import Movie from "../components/Movie";

const Details = ({ fetchedData }) => {
  const [movie, setMovie] = useState();
  const [rating, setRating] = useState(0);
  const [note, setNote] = useState("");

  //Movie
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

  const params = useParams();

  //Notes
  const fetchNote = async () => {
    const { data } = await axios.get(
      `/api/notes/${params.movieName}`
    );
    if (!data[0]) {
      setNote("");
    } else {
      setNote(data[0].note);
    }
  };
  useEffect(() => {
    if (!note) {
      fetchNote();
    }
  }, []);
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const noteChange = async () => {
    await axios.put(
      `/api/notes/${params.movieName}`,
      {
        note: note,
      }
    );
  };

  //Rating
  const fetchRating = async () => {
    const { data } = await axios.get(
      `/api/ratings/${params.movieName}`
    );
    if (!data[0]) {
      setRating(0);
    } else {
      setRating(data[0].rating);
    }
  };
  useEffect(() => {
    if (rating === 0) {
      fetchRating();
    }
  }, []);

  const ratingChange = async (
    event,
    newValue
  ) => {
    await axios.put(
      `/api/ratings/${movie.name}`,
      { rating: newValue }
    );
    setRating(newValue);
  };
  return (
    <>
      {movie ? (
        <Movie
          clickable={false}
          image={
            movie.image
              ? movie.image.medium
              : defaultImg
          }
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
          onChange={ratingChange}
        />
      </div>
      <div className="notes">
        <TextField
          id="Note"
          label="Your private notes and comments for movie"
          multiline
          minRows={5}
          variant="outlined"
          fullWidth
          value={note}
          onChange={handleChange}
          onBlur={noteChange}
        />
      </div>
    </>
  );
};

export default Details;
