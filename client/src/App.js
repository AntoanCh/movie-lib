import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from "./components/Header";
import { useState } from "react";
import { createTheme } from "@material-ui/core/styles";
import {
  green,
  red,
} from "@material-ui/core/colors/";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [input, setInput] = useState("");
  const [fetchedData, setFetchedData] = useState(
    []
  );

  const theme = createTheme({
    palette: {
      primary: green,
      secondary: red,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            input={input}
            setInput={setInput}
            fetchedData={fetchedData}
            setFetchedData={setFetchedData}
          />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/search"
                element={
                  <Search
                    input={input}
                    setInput={setInput}
                    fetchedData={fetchedData}
                    setFetchedData={
                      setFetchedData
                    }
                  />
                }
              />

              <Route
                path="/movies/:movieName"
                element={
                  <Details
                    fetchedData={fetchedData}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <>
                    <h1>404 Not Found</h1>{" "}
                    <h2>Bad Request</h2>
                  </>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
