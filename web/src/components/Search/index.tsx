import React from "react";
import "./index.scss";

const Search: React.FC = () => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน..."
        className="searchBox__input"
      />
    </div>
  );
};

export default Search;
