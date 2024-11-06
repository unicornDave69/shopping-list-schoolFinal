import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./Detail/Detail";
import Overview from "./Overview/Overview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailProvider from "./Providers/DetailProvider";
import DetailItemTable from "./Detail/DetailItemTable";

function App() {
  return (
    <DetailProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route
            path="/list/:listId"
            element={<Detail DetailItemTable={DetailItemTable} />}
          />
        </Routes>
      </Router>
    </DetailProvider>
  );
}

export default App;
