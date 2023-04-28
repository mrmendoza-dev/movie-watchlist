import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import SearchPage from "./pages/SearchPage";
import WatchlistPage from "./pages/WatchlistPage";
import useLocalStorage from "./hooks/useLocalStorage";

export const MyContext = React.createContext<any>(null);

function App() {
  const [watchlist, setWatchlist] = useLocalStorage("watchlist", []);
  const API = { base: "https://www.omdbapi.com/", key: "b062f19b" };

  return (
    <MyContext.Provider value={{ watchlist, setWatchlist, API }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
