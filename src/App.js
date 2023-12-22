import "./App.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Button from "@mui/material/Button";
import Displaycard from "./Displaycard";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <Button variant="contained">Display</Button>
        <div className="darkmode">
          <DarkModeIcon />
        </div>
      </div>
      <div className="dashboard">
        <div className="card-container">
          <div className="inner-container1">
            Column 1
            <Displaycard />
            <Displaycard />
            <Displaycard />
          </div>
          <div className="inner-container2">
            Column 2
            <Displaycard />
          </div>
          <div className="inner-container3">
            Column 3
            <Displaycard />
            <Displaycard />
          </div>
          <div className="inner-container4">
            Column 4
            <Displaycard />
            <Displaycard />
            <Displaycard />
          </div>
          <div className="inner-container5">
            Column 5
            <Displaycard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
