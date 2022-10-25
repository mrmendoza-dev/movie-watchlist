// import Hero from "../components/Hero";
import Hero from "../components/Hero";
import movieIcon from "../assets/images/icon-movie.png";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";



export default function Search(props: any) {

  
  const key = "b062f19b";
  const base = "https://www.omdbapi.com/";
  

useEffect(()=> {getMovies("bladerunner")}, [])


async function getMovies(search: any) {
  let url = `${base}?apikey=${key}&s=${search}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(url);
  let results = data.Search;
  renderMovies(results);
  return results;
}




async function renderMovies(movieData: any) {
  let inputHtml = ``;

  if (!movieData) {
    inputHtml = `
        <div id="defaultMessage" class="default-message">
            <p>Unable to find what you're looking for. Please try another search.</p>
        </div>`;
    return;
  }

  movieData.forEach((id: any) => {
    let url = `${base}?apikey=${key}&i=${id.imdbID}`;

    fetch(url)
      .then((res) => res.json())
      .then((movie) => {
        let movieHtml = <MovieCard />;
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



