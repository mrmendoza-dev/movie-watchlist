import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import "./MovieCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";
import missingPoster from "/images/missing.png";

export default function MovieCard({ movie }: any) {
  const { watchlist, setWatchlist } = useContext(MyContext);

  function addToWatchlist(id: any) {
    if (watchlist.includes(id)) {
      setWatchlist(watchlist.filter((watchlistId: any) => watchlistId !== id));
    } else {
      setWatchlist([...watchlist, id]);
    }
  }

  const imdbUrl = `https://www.imdb.com/title/${movie.imdbID}/`;

  return (
    <div className="MovieCard">
      <img
        className={`movie-poster ${movie.Poster === "N/A" ? "error" : ""}`}
        src={movie.Poster}
        onError={(e: any) => {
          e.target.src = movie.Poster === "N/A" ? missingPoster : "";
        }}
      />

      <div className="movie-info">
        <div className="movie-main">
          <a
            className="movie-title"
            href={imdbUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <p>{movie.Title}</p>
          </a>
          <p className="movie-year">{movie.Year}</p>

          <FontAwesomeIcon
            icon={icons.faStar}
            className="star"
            title="IMDb Rating"
          />

          <p className="movie-rating">{movie.imdbRating}</p>
        </div>

        <div className="movie-sub">
          <p className="movie-runtime">{movie.Runtime}</p>
          <p className="movie-genre">{movie.Genre}</p>

          <button
            className="btn-wl"
            onClick={() => {
              addToWatchlist(movie.imdbID);
            }}
          >
            {watchlist.includes(movie.imdbID) ? (
              <FontAwesomeIcon
                icon={icons.faCircleMinus}
                title="Remove from Watchlist"
              />
            ) : (
              <FontAwesomeIcon
                icon={icons.faCirclePlus}
                title="Add to Watchlist"
              />
            )}
            <p className="wl-text">Watchlist</p>
          </button>
        </div>

        <p className="movie-plot">{movie.Plot}</p>
      </div>
    </div>
  );
}
