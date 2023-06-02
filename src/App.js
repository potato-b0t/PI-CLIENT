import './App.css';
import Main from "./Components/Main"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
