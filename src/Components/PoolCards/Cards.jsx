import { useDispatch, useSelector } from "react-redux";
import "./Cards.css";

import React from "react";
import * as actions from "../../redux/actions";

const Cards = (props) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const pokemon = useSelector((state) => state.pokemonCurrent);

  React.useEffect(() => {
    dispatch(actions.GetPokemonByID(props.id));
  }, [dispatch]);

  return (
    <div className="Card">
      <img
        src={props.Image}
        alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      />
      <p>{props.name.replace("-", " ")}</p>
    </div>
  );
};

export default Cards;
