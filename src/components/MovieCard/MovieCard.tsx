import { useContext } from "react";
import { MyContext } from "../../App";
import "./MovieCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

export default function MovieCard(props: any) {
  const { watchlist, setWatchlist } = useContext(MyContext);

  const movie = props.movie;


  function addToWatchlist(id: any) {
    let newWatchlist = watchlist;
    if (newWatchlist.includes(id)) {
      newWatchlist.splice(newWatchlist.indexOf(id), 1);
    } else {
      newWatchlist.push(id);
    }
    console.log(newWatchlist);

    setWatchlist(newWatchlist);
  }


  return (
    <div className="MovieCard">
      <img className="movie-poster" src={movie.Poster} />

      <div className="movie-info">
        <div className="movie-main">
          <p className="movie-title">{movie.Title}</p>
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

        <div className="">
          <p className="movie-plot">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}
