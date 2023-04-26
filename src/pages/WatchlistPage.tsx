
import Header from "../components/Header";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard"
  import { MyContext } from "../App";
  import React, { useState, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";

export default function WatchlistPage(props: any) {
    const { watchlist, setWatchlist, addToWatchlist, API } = useContext(MyContext);

    console.log(watchlist);



  function renderWatchlist() {
    watchlist.forEach((id: any) => {
      let url = `${API.base}?apikey=${API.key}&i=${id}`;
      fetch(url)
        .then((res) => res.json())
        .then((movie) => {
          let movieHtml = <MovieCard />;
        });
    });
  }

    return (
      <div className="WatchlistPage">
        <Header
          text={{
            title: "My Watchlist",
            linkText: "Search for movies",
            link: "/",
          }}
        />



        <section className="display">
          <div className="SearchResults">
            {watchlist ? (
              <>
                {/* {watchlist.map((result) => {
                  return <MovieCard key={nanoid()} movie={result} />;
                })} */}
              </>
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



