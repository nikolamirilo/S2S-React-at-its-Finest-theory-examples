import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Test from "./Pages/Test";
import Home from "./Pages/Home";
import Fetch from "./Pages/Fetch";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/fetch">Fetch</Link>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/fetch" component={Fetch} />
      </Switch>
    </div>
  );
}

export default App;
