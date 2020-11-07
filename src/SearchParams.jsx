import React, {useState} from "react";

const SearchParams = () => {


  // const [author, setAuthor] = usestate([]);
  // const [intersectionality, setIntersectionality] = useSate("POC");
  const [book, setBook] = useState([]);
  // const [apikey, setApikey] = useState("AIzaSyBxe49CrSJ07GE8xsGDKUAw2punWq04Cl4");

  return (
    <div className="search params">
      <form>
        <label htmlFor="genre">
        Book
          <input id="genre"
          value={book}
          placeholder="Genre"
          onChange={e => setBook(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
  setBook(book);
};

export default SearchParams;
