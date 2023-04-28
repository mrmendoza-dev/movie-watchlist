import Header from "../components/Header";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { MyContext } from "../App";
import React, { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";
import axios from "axios";





export default function WatchlistPage(props: any) {
  const { watchlist, setWatchlist, API } = useContext(MyContext);
  const [movies, setMovies] = useState([]);

  function getMovieById(id: string): Promise<any> {
    let url = `${API.base}?apikey=${API.key}&i=${id}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
  }
  
 
  useEffect(() => {
    async function fetchMovies() {
      const moviePromises = watchlist.map((id: string) => getMovieById(id));
      const movieData: any = await Promise.all(moviePromises);
      setMovies(movieData);
    }
    fetchMovies();
  }, [watchlist]);

  return (
    <div className="WatchlistPage">
      <Header
        text={{
          title: "My Watchlist",
          linkText: "Search for movies",
          link: "/",
        }}
      />

      <section className="movie-list">
        <div className="SearchResults">
          {movies && movies.length > 0 ? (
            movies.map((movie: any) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          ) : (
            <div className="default-message">
              <p>Your watchlist is looking a little empty...</p>

              <Link to="/">
                <FontAwesomeIcon icon={icons.faCirclePlus} />
                <p className="default-sub">Let's add some movies!</p>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}