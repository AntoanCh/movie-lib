import SearchForm from "../components/SearchForm";
import Movies from "../components/Movies";

const Search = ({ input, setInput, fetchedData, setFetchedData }) => {
  return (
    <div>
      <div>
        <h1>Search</h1>
        <SearchForm
          input={input}
          setInput={setInput}
          fetchedData={fetchedData}
          setFetchedData={setFetchedData}
        />
      </div>

      <Movies fetchedData={fetchedData} />
    </div>
  );
};

export default Search;
