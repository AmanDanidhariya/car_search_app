import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  console.log(query)
  return (
    <div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            className="border-4 bg-white h-10 px-5  py-4 rounded-full text-sm focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
