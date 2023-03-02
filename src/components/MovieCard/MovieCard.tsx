import "./MovieCard.css"
  import { MyContext } from "../../App";
import React, { useState, useEffect, useContext } from "react";

export default function MovieCard(props: any) {
    const { watchlist, setWatchlist} = useContext(MyContext);

   const movie = props.movie;

   
//  function addToWatchlist(id: any) {
//    console.log("watchlist");
//  }





   function addToWatchlist(id: any) {

    let newWatchlist = watchlist;
     if (newWatchlist.includes(id)) {
       newWatchlist.splice(newWatchlist.indexOf(id), 1);
     } else {
       newWatchlist.push(id);
     }
     console.log(newWatchlist);

     setWatchlist(newWatchlist);
    //  localStorage.setItem("watchlist", JSON.stringify(watchlist));
   }

   
    return (
      <div className="MovieCard">
        <img className="movie-poster" src={movie.Poster} />

        <div className="movie-info">
          <div className="movie-main">
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-year">{movie.Year}</p>

            <i className="star fa-solid fa-star" title="IMDb Rating"></i>

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
                <i
                  className="fa-solid fa-circle-minus"
                  title="Remove from Watchlist"
                ></i>
              ) : (
                <i
                  className="fa-solid fa-circle-plus"
                  title="Add to Watchlist"
                ></i>
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
