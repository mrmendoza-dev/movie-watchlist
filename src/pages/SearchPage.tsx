import Header from "../components/Header";
import React, { useState, useEffect, useContext } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import { nanoid } from "nanoid";
import { MyContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";

export default function Search(props: any) {
  const { watchlist, setWatchlist, API } = useContext(MyContext);

  // let watchlist = props.watchlist;
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    search: "",
  });

  const [searchQuery, setSearchQuery] = useState("blade");

  useEffect(() => {
    getMovies(searchQuery);
  }, []);

  async function getMovieDetails(id: any) {
    let url = `${API.base}?apikey=${API.key}&i=${id.imdbID}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    return data;
  }

  async function getMovies(search: any) {
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
    console.log(movieData);
    setSearchResults(movieData);
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (formData.search) {
      setSearchQuery(formData.search);
      getMovies(formData.search);
    }
  }

  return (
    <div className="SearchPage">
      <Header
        text={{
          title: "Find your film",
          linkText: "My Watchlist",
          link: "/watchlist",
        }}
      />

      <form className="SearchBar" onSubmit={handleSubmit}>
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
          onChange={handleChange}
          value={formData.search}
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
