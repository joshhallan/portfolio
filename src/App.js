import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

// Navbar
import Navbar from "./components/navbar";
// Page components
import Home from "./pages/home";
import Work from "./pages/work";
import NotFound from "./pages/404";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
