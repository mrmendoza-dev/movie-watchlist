// import Hero from "../components/Hero";
import Hero from "../components/Hero";
import movieIcon from "../assets/images/icon-movie.png";
import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";



export default function Search(props: any) {





async function getMovies(search) {
  let url = `${base}?apikey=${key}&s=${search}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(url);
  let results = data.Search;
  renderMovies(results);
  return results;
}




async function renderMovies(movie_data) {
  let inputHtml = ``;

  if (!movie_data) {
    inputHtml = `
        <div id="defaultMessage" class="default-message">
            <p>Unable to find what you're looking for. Please try another search.</p>
        </div>`;
    displayEl.innerHTML = inputHtml;
    return;
  }

  movie_data.forEach((id) => {
    let url = `${base}?apikey=${key}&i=${id.imdbID}`;

    fetch(url)
      .then((res) => res.json())
      .then((movie) => {
          let movieHtml = <MovieCard />;

        inputHtml += movieHtml;
        displayEl.innerHTML = inputHtml;
      });
  });
}




function generateResults() {

}

  return (
    <div className="Search">
      <Hero
        text={{
          title: "Find your film",
          linkText: "My Watchlist",
          link: "/watchlist",
        }}
      />
      <SearchBar getSearchInput={props.getSearchInput} />

      {(props.searchResults && props.searchResults != undefined) ? (
        <section className="display">
          <div className="default-message">
            <i className="fa-solid fa-film"></i>
            <p>Start Exploring</p>
          </div>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}



