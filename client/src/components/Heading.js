import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Heading = () => {
  const navigate = useNavigate();
  const toSearch = () => {
    navigate("/search");
  };
  return (
    <section className="heading">
      <div>
        <h1 style={{ textAlign: "start" }}>
          Welcome to your movie collection
        </h1>
        <p>
          Use our database to search for your
          favorite movies and tv shows.
          <br />
          Save them to your Favorites, Rate and
          Comment.
          <br />
          Enjoy
        </p>
        <Button
          variant="outlined"
          color="primary"
          onClick={toSearch}
        >
          Search
        </Button>
      </div>
    </section>
  );
};

export default Heading;
