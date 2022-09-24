
import Hero from "../components/Hero"
import addIcon from "../assets/images/icon-add-dark.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"


export default function Watchlist(props) {




  function renderWatchlist() {

    console.log(watchlist);
    watchlist.forEach((id) => {
      let url = `${base}?apikey=${key}&i=${id}`;

      fetch(url)
        .then((res) => res.json())
        .then((movie) => {
          let movieHtml = <MovieCard />;
          inputHtml += movieHtml;
        });
    });
  }

    return (
      <div className="Watchlist">
        <Hero
          text={{
            title: "My Watchlist",
            linkText: "Search for movies",
            link: "/",
          }}
        />

        <section className="display">
          <div className="default-message">
            <p>Your watchlist is looking a little empty...</p>

            <Link to="/">
              <i className="fa-solid fa-circle-plus"></i>
              <p className="default-sub">Let's add some movies!</p>
            </Link>
          </div>
        </section>
      </div>
    );
}



