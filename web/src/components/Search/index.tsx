import React from "react";
import "./index.scss";

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder={placeholder}
        className="searchBox__input"
      />
    </div>
  );
};

export default Search;
