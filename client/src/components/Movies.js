import Movie from "./Movie";
import defaultImg from "../default.jpg";

const Movies = ({ fetchedData }) => {
  return (
    <div>
      {fetchedData.map((movie) => (
        <Movie
          clickable={true}
          image={movie.show.image ? movie.show.image.medium : defaultImg}
          name={movie.show.name}
          genres={movie.show.genres}
          runtime={movie.show.averageRuntime}
          site={movie.show.officialSite}
          summary={movie.show.summary}
          premiered={movie.show.premiered}
          key={movie.show.id}
        />
      ))}
    </div>
  );
};

export default Movies;
