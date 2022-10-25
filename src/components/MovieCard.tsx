

export default function MovieCard(props: any) {
   const movie = props.movie;

    return (
      <div className="MovieCard">
        <img className="movie-poster" src={movie.Poster} />

        <div className="movie-info">
          <div className="movie-main">
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-year">{movie.Year}</p>
            <p className="movie-rating">{movie.imdbRating}</p>
          </div>

          <div className="movie-sub">
            <p className="movie-runtime">{movie.Runtime}</p>
            <p className="movie-genre">{movie.Genre}</p>
            <button
              className="movie-wl"
              // onClick={props.addWatchlist('{id.imdbID}')}
            >
              Watchlist
            </button>
          </div>

          <div className="">
            <p className="movie-plot">{props.Plot}</p>
          </div>
        </div>
      </div>
    );
}