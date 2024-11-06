import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<Overview />} />
        <Route path="/list/:listId" component={<Detail />} />
      </Switch>
    </Router>
  );
}

export default App;
