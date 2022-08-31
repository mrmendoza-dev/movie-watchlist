import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist";

function App() {

  return (
    <div className="App">
      <div className="app-screen">
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
