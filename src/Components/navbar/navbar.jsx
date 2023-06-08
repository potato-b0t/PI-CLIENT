import { Link } from "react-router-dom";
import "./navbar.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <a>
        <Link to="/Home">Home</Link>
      </a>
      <SearchBar searchedName={props.name} />
      <a>
        <Link to="/createPokemon">Create Pokemon</Link>
      </a>
    </div>
  );
};
export default NavBar;
