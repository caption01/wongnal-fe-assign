import React from "react";
import { useClipboard } from "use-clipboard-copy";
import "./index.scss";

interface SearchProps {
  placeholder: string;
  keyword: string;
  onSearch: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch, keyword }) => {
  const clipboard = useClipboard();
  const fullPath = `${window.location.href}`;

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder={placeholder}
        className="searchBox__input"
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
      {keyword && (
        <button
          className="searchBox__copy click-able"
          onClick={() => clipboard.copy(fullPath)}
        >
          copy
        </button>
      )}
    </div>
  );
};

export default Search;
