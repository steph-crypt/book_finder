import React, {useState} from "react";

const SearchParams = () => {
  const [genre, setGenre] = useState("Feminism");
  // const [author, setAuthor] = usestate([]);
  // const [intersectionality, setIntersectionality] = useSate("POC");
  // const [books, setBooks] = useState([]);
  const [apikey, setApikey] = useState("AIzaSyBxe49CrSJ07GE8xsGDKUAw2punWq04Cl4");

  return (
    <div className="search params">
      <form>
        <label htmlFor="genre">
        Genre
          <input id="genre"
          value={genre}
          placeholder="Genre"
          onChange={e => setGenre(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
