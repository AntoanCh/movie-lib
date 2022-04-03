import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
// import searchSlice from '../features/search/searchSlice'
// import { store } from '../app/store'
// import { changeInput } from '../features/search/searchSlice'
// import { useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "white",
    margin: "10px",
    width: "15em",
  },
  margin: "10px",
});

const SearchForm = ({ input, setInput, fetchedData, setFetchedData }) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  async function fetchData() {
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${input}`
    );

    setFetchedData(data);
    // console.log(fetchedData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
    fetchData();
    setInput("");
  };
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useDispatch()

  const classes = useStyles();
  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <TextField
          id="search"
          label="Search by movie title..."
          type="search"
          variant="outlined"
          margin="dense"
          value={input}
          onChange={handleInput}
          className={classes.root}
        />
        <Button variant="outlined" color="primary" size="large" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
