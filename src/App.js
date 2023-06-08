import { Main } from "./Components/Main.jsx"
import { Home } from './Components/Home/Home.jsx';
import { Route, Routes } from "react-router-dom"
import Detail from "./Components/DetailPokemon/Detail.jsx";
import React from "react";
import Formpage from "./Components/Formpage/Formpage.jsx";
import SearchResults from "./Components/SearchResults/SearchResults.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Home/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search-results/:searchTerm" element={<SearchResults />} />
        <Route path="/createPokemon/" element={<Formpage />} />
      </Routes>
    </>
  );
}

export default App;
