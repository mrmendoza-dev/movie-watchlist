import Header from "../components/Header";
import React, { useState, useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { nanoid } from "nanoid";
import { MyContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";

export default function SearchPage(props: any) {
  const { watchlist, setWatchlist, API } = useContext(MyContext);

  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("blade");


  useEffect(() => {
    getMoviesbyQuery(searchQuery);
  }, []);

  async function getMovieDetails(id: any) {
    let url = `${API.base}?apikey=${API.key}&i=${id.imdbID}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  async function getMoviesbyQuery(search: any) {
    let url = `${API.base}?apikey=${API.key}&s=${search}`;
    let response = await fetch(url);
    let data = await response.json();
    let results = data.Search;

    if (!results) {
      return;
    }

    let promises: any = [];

    let movieData: any = [];
    results.forEach((id: any) => {
      promises.push(
        getMovieDetails(id).then((data: any) => {
          movieData.push(data);
        })
      );
    });
    await Promise.all(promises);
    setSearchResults(movieData);
  }

  function handleSearchInputChange(event: any) {
    setSearchInput(event.target.value);
  }


  function searchMovie(event: any) {
    event.preventDefault();
    if (searchInput) {
      setSearchQuery(searchInput);
    }
  }
  useEffect(() => {
    getMoviesbyQuery(searchQuery);
  }, [searchQuery]);


  return (
    <div className="SearchPage">
      <Header
        text={{
          title: "Find your film",
          linkText: "My Watchlist",
          link: "/watchlist",
        }}
      />

      <form className="SearchBar" onSubmit={searchMovie}>
        <label htmlFor="search">
          <FontAwesomeIcon
            icon={icons.faMagnifyingGlass}
            className="search-icon"
          />
        </label>
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie"
          onChange={handleSearchInputChange}
          value={searchInput}
          name="search"
          id="search"
        />
        <button className="search-btn">Search</button>
      </form>

      <div className="SearchResults">
        {searchResults ? (
          <div className="movie-list">
            <p className="results-text">
              Search results for "{searchQuery}": {}
            </p>
            {searchResults.map((result) => {
              return <MovieCard key={nanoid()} movie={result} />;
            })}
          </div>
        ) : (
          <div className="default-message">
            <FontAwesomeIcon icon={icons.faFilm} />
            <p>Start Exploring</p>
          </div>
        )}
      </div>
    </div>
  );
}
