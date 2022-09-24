

export default function MovieCard(props: any) {
   
    return (
      <div className="MovieCard">
        <img className="movie__poster" src="${movie.Poster}" />

        <div className="movie__info">
          <div className="movie__main">
            <p className="movie__title">${props.Title}</p>
            <p className="movie__year">${props.Year}</p>
            <p className="movie__rating">${props.imdbRating}</p>
          </div>

          <div className="movie__sub">
            <p className="movie__runtime">${props.Runtime}</p>
            <p className="movie__genre">${props.Genre}</p>
            <button
              className="movie__wl"
              onClick={props.addWatchlist('${id.imdbID}')}
            >
              Watchlist
            </button>
          </div>

          <div className="">
            <p className="movie__plot">${props.Plot}</p>
          </div>
        </div>
      </div>
    );
}