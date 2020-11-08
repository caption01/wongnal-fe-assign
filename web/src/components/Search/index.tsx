import React from "react";
import "./index.scss";

interface SearchProps {
  placeholder: string;
  keyword: string;
  onSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch, keyword }) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder={placeholder}
        className="searchBox__input"
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
