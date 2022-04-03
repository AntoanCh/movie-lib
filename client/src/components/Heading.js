import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "blue",
    color: "white",
    fontSize: "12",
    fontWeight: "600",
  },
});

const Heading = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const toSearch = () => {
    navigate("/search");
  };
  return (
    <section className="heading">
      <div>
        <h1 style={{ textAlign: "start" }}>Heading</h1>
        <p>Search your favorite movies in the database</p>
        <Button
          className={classes.root}
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
