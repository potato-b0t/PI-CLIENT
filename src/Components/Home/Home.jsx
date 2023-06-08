import * as actions from "../../redux/actions";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import Cards from "../PoolCards/Cards";
import PageBar from "../PageBar/PageBar";
import NavBar from "../navbar/navbar";
import "./styles/Home.css";

export function Home() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  React.useEffect(() => {
    console.log(page);
    if (page <= 0 || undefined || Number.isNaN(page)) {
      return setPage(1);
    }

    dispatch(actions.GetAllPOKEMONS());
    dispatch(actions.GetAllTypes());
  }, [dispatch, page]);

  let arraysPokemons = [];
  for (let i = 0; i < pokemons.length; i += 12) {
    const arrayTemp = pokemons.slice(i, i + 12);
    arraysPokemons.push(arrayTemp);
  }

  const NextPage = () => {
    setPage(page + 1);
    redirect(`/Home/${page}`);
  };

  const PreviousPage = () => {
    setPage(page - 1);
    redirect(`/Home/${page}`);
  };

  return (
    <>
      <NavBar />
      <PageBar
        NextPage={NextPage}
        PreviousPage={PreviousPage}
        pageCurrent={page}
        lastPage={arraysPokemons.length - 1}
      />
      <div className="Home-card-container">
        <div className="Home-card-grid">
          {arraysPokemons[page]?.map((element) => {
            return (
              <Link
                key={element.id}
                to={`/detail/${element.id}`}
                className="Home-card-link">
                <Cards
                  id={element.id}
                  name={element.name}
                  Image={element.Image}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <PageBar
        NextPage={NextPage}
        PreviousPage={PreviousPage}
        pageCurrent={page}
        lastPage={arraysPokemons.length - 1}
      />
    </>
  );
}
