import React from "react";
import React, {useState} from "react";

const [location, setLocation] = useState("San Francisco, CA");

const SearchParams = () => {
  const location = "San Francisco, CA";
  return (
    <div className="search params">
      <form>
        <label htmlFor="location">
        location
          <input id="location"
          value={location}
          placeholder="Location"
          onChange={e => setLocation(e.target.value)}
          />;
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
