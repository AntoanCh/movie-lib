import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Header = ({ input, setInput, fetchedData, setFetchedData }) => {
  return (
    <header className="header">
      <Link className="link" to="/">
        My Movie Collection
      </Link>
      <SearchForm
        input={input}
        setInput={setInput}
        fetchedData={fetchedData}
        setFetchedData={setFetchedData}
      />
    </header>
  );
};

export default Header;
