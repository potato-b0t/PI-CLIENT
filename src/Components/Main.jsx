import "../App.css";
import background from "./img/pokemon.png";
import { Link } from "react-router-dom";

export function Main() {
  return (
    <>
      <div className="App">
        <img src={background} />
        <div className="sign-start">
          <h1>Pokemon</h1>

          <a>
            <Link to="/Home">
              <h2>Enter</h2>
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}
