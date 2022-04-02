import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const Heading = () => {
  const navigate = useNavigate();
  const toSearch = () => {
    navigate("/search");
  };
  return (
    <section className="heading">
      <div>
        <h1 style={{ textAlign: "start" }}>Heading</h1>
        <p>Search your favorite movies in the database</p>
        <Button variant="outlined" color="primary" onClick={toSearch}>
          Search
        </Button>
      </div>
    </section>
  );
};

export default Heading;
