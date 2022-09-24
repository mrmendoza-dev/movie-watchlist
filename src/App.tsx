import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist";



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(loadWatchlist, []);



  const key = "b062f19b";
  const base = "https://www.omdbapi.com/";



  async function getResults(search: string) {
    let url = `${base}?apikey=${key}&s=${search}`;
    let response = await fetch(url);
    let data = await response.json();
    let results = data.Search;
    setSearchResults(results);
    console.log(results);
    // renderMovies(results);
  }


function getSearchInput(searchInput: string) {
  getResults(searchInput);
} 






function loadWatchlist() {
  setWatchlist(JSON.parse(localStorage.getItem("watchlist") || "[]"));
  if (watchlist === null) {
    setWatchlist([]);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
}



  return (
    <div className="App">
      <div className="app-screen">
        <Routes>
          <Route
            path="/"
            element={
              <Search
                getSearchInput={getSearchInput}
                searchResults={searchResults}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={setWatchlist}
                loadWatchlist={loadWatchlist}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App
