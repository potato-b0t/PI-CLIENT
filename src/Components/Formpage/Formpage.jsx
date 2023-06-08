import * as actions from "../../redux/actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/navbar";
import "./Formpage.css";

const Formpage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    types: [],
  });

  let types = useSelector((state) => state.types);
  let pokemons = useSelector((state) => state.pokemons);

  const [typesSaved, setTypesSaved] = useState([]);
  const [TypesData, setTypesData] = useState([]);

  const [Error, setError] = useState({});

  let formDataForSend;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    let errors = { ...Error };
    const regexName = /^[.]+$/;
    const regexURL = /^(https?:\/\/\/\S+\.png)?$/;

    switch (name) {
      case "name":
        errors.name = regexName.test(value)
          ? "El Nombre solo puede tener letras"
          : null;
        break;

      case "image":
        errors.image = regexURL.test(value) ? "Debe ser una URL" : null;
        break;

      case "life":
        errors.life = value < 1 ? "Debe ser mayor que 0" : null;
        break;

      case "attack":
        errors.attack = value < 1 ? "Debe ser mayor que 0" : null;
        break;

      case "defense":
        errors.defense = value < 1 ? "Debe ser mayor que 0" : null;
        break;

      case "speed":
        errors.speed = value < 1 ? "Debe ser mayor que 0" : null;
        break;
    }

    setError(errors);
  };

  const handleAddType = (type) => {
    if (typesSaved.length < 2) {
      console.log(type);
      setTypesSaved([...typesSaved, type]);
      setTypesData(TypesData.filter((typeNow) => type != typeNow));
    }
  };
  const handleRemoveType = (type) => {
    setTypesSaved(typesSaved.filter((typeNow) => type != typeNow));
    setTypesData([...TypesData, type]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(event);

    formDataForSend = {
      id: pokemons.length + 1,
      name: event.target.name.value,
      image: event.target.image.value,
      Life: event.target.life.value,
      Attack: event.target.attack.value,
      Defense: event.target.defense.value,
      speed: event.target.speed.value,
      types: typesSaved,
    };

    console.log(formDataForSend);

    dispatch(actions.PostPokemon(formDataForSend));
  };

  React.useEffect(() => {
    dispatch(actions.GetAllTypes());
    dispatch(actions.GetAllPOKEMONS());
  }, [dispatch]);

  React.useEffect(() => {
    setTypesData([...types]);
  }, [types]);

  const isFormValid =
    formData.name !== "" &&
    formData.image !== "" &&
    formData.life > 0 &&
    formData.attack > 0 &&
    formData.defense > 0 &&
    formData.speed > 0 &&
    typesSaved.length > 0 &&
    !Error.name &&
    !Error.image &&
    !Error.life &&
    !Error.attack &&
    !Error.defense &&
    !Error.speed;

  return (
    <>
      <NavBar />
      <div className="formpage-container">
        <div className="image-section">
          <img className="image-container" src={formData.image} alt="..." />
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="Input">
              <label>Pokemon Name</label>
              <input
                key="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <p className="Error">{Error.name}</p>
            </div>
            <br />
            <div className="Input">
              <label>Image</label>
              <input
                key="image"
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              <p className="Error">{Error.image}</p>
            </div>
            <br />
            <div className="Input">
              <label>Life</label>
              <input
                key="life"
                type="number"
                name="life"
                value={formData.life}
                onChange={handleChange}
              />
              <p className="Error">{Error.life}</p>
            </div>
            <br />
            <div className="Input">
              <label>attack</label>
              <input
                key="attack"
                type="number"
                name="attack"
                value={formData.attack}
                onChange={handleChange}
              />
              <p className="Error">{Error.attack}</p>
            </div>
            <br />
            <div className="Input">
              <label>defense</label>
              <input
                key="defense"
                type="number"
                name="defense"
                value={formData.defense}
                onChange={handleChange}
              />
              <p className="Error">{Error.defense}</p>
            </div>
            <br />
            <div className="Input">
              <label>speed</label>
              <input
                key="speed"
                type="number"
                name="speed"
                value={formData.speed}
                onChange={handleChange}
              />
              <p className="Error">{Error.speed}</p>
            </div>
            <br />
            {typesSaved.length > 0 ? (
              <>
                <p>Types Selected</p>
                <ul>
                  {typesSaved.map((type) => (
                    <li key={type.id}>
                      <button
                        type="button typeButtonSaved"
                        onClick={() => handleRemoveType(type)}>
                        {type.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <p>Types</p>
            <ul>
              {TypesData.map((type) => (
                <>
                  <li key={type.id}>
                    <button
                      type="button typeButton"
                      onClick={() => handleAddType(type)}>
                      {type.name}
                    </button>
                  </li>
                </>
              ))}
            </ul>
            <button type="submit" disabled={!isFormValid}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formpage;
