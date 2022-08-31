

export default function SearchBar() {
  return (
    <div className="hero__input">
      <label htmlFor="searchInput">
        <i className="fa fa-search" aria-hidden="true"></i>
      </label>
      <input
        className="search-input"
        id="searchInput"
        type="text"
        placeholder="Search for a movie"
      />
      <button className="search-btn" id="searchBtn" type="submit">
        Search
      </button>
    </div>
  );
}


