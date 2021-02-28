import React from "react";
import { useState } from "react/cjs/react.development";

const Search = ({ searchTerm }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(text);
    searchTerm("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="input-form"
          placeholder="Search audios by title or year"
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </>
  );
};

export default Search;
