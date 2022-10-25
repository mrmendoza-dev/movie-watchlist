// import Hero from "../components/Hero";
import Hero from "../components/Hero";
import movieIcon from "../assets/images/icon-movie.png";
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { nanoid } from "nanoid";


export default function Search(props: any) {
  const [searchResults, setSearchResults] = useState([]);

  
  const key = "b062f19b";
  const base = "https://www.omdbapi.com/";
  

useEffect(() => {
  let results = getMovies("blade");
}, []);


async function getMovie(id: any) {
  // console.log(id.imdbID);
    let url = `${base}?apikey=${key}&i=${id.imdbID}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getMovies(search: any) {
  let url = `${base}?apikey=${key}&s=${search}`;
  let response = await fetch(url);
  let data = await response.json();
  // console.log(url);


  let results = data.Search;
  // console.log(results);

  let movieData: any = [];
  results.forEach((id: any) => {
    movieData.push(getMovie(id))
  });

  setSearchResults(movieData);
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
      <div className="SearchResults">
        {searchResults.map((result)=> {
          return <MovieCard key={nanoid()} movie={result} />;
        })}
      </div>
    </div>
  );
}



