import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/list/:listId" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
