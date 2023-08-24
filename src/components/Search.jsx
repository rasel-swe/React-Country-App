/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Style from "./search.module.css"

const Search = (props) => {
  const [Search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    props.onSearch(Search);
  }, [Search]);

  return (
    <div className={Style.div}>
      <input
        value={Search}
        onChange={handleChange}
        type="text"
        placeholder="Search Country"
      />
    </div>
  );
};

export default Search;
