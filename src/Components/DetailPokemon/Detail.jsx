import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions";
import NavBar from "../navbar/navbar";
import "./Detail.modules.css";

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const pokemon = useSelector((state) => state.pokemonCurrent);
  const types = useSelector((state) => state.types);

  React.useEffect(() => {
    dispatch(actions.GetPokemonByID(id ? id : 1));
    dispatch(actions.GetAllPOKEMONS());
    dispatch(actions.GetAllTypes());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="container-detail">
        <div className="content">
          <img
            src={pokemon.Image}
            alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
          <ul>
            <li>
              Name: <p>{pokemon.name.replace("-", " ")}</p>
            </li>
            <li>Life: {pokemon.Life}</li>
            <li>Attack: {pokemon.Attack}</li>
            <li>Defense: {pokemon.Defense}</li>
            <li>Speed: {pokemon.speed}</li>
            <li>
              <p>Type</p>
              <ul>
                {pokemon.typesID.map((type) => {
                  return <li>{types[type - 1].name}</li>;
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Detail;
