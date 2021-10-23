import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Test from "./Pages/Test";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/test" component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
