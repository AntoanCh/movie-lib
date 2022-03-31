import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Details from "./pages/details";
import Home from "./pages/home";
import Search from "./pages/search";
import Movies from "./pages/movies";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/search"
              element={<Search />}
            />
            {/* <Route
              path="/movies"
              element={<Movies />}
            /> */}
            <Route
              path="/movies/:movieId"
              element={<Details />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
