import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Cards from "../PoolCards/Cards";
import NavBar from "../navbar/navbar";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const { pokemonsFiltered } = useSelector((state) => state);

  const searchResults = pokemonsFiltered.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const PAGE_SIZE = 12;
  const page = 1;
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedResults = searchResults.slice(startIndex, endIndex);

  console.log(paginatedResults.length);

  return (
    <>
      <NavBar />
      <div className="search-results">
        <div className="pool">
          {paginatedResults.map((pokemon) => {
            return (
              <Cards
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                Image={pokemon.Image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
