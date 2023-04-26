import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./css/App.scss";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";

export const MyContext = React.createContext<any>(null);

function App() {
  const [watchlist, setWatchlist] = useState(loadWatchlist);

  useEffect(() => {
    console.log("watchlist");
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function loadWatchlist() {
    let watchlist: any = JSON.parse(localStorage.getItem("watchlist") || "[]");
    if (watchlist != undefined) {
      return watchlist;
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
      return false;
    }
  }
  const API = { base: "https://www.omdbapi.com/", key: "b062f19b" };

  return (
    <MyContext.Provider value={{ watchlist, setWatchlist, API }}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
              // getSearchInput={getSearchInput}
              // watchlist={watchlist}
              // setWatchlist={setWatchlist}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchlistPage
                watchlist={watchlist}
                setWatchlist={setWatchlist}

                // loadWatchlist={loadWatchlist}
              />
            }
          />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
