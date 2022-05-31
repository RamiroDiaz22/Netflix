import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav.jsx";
import Search from "./Pages/Search/Search.jsx";
import Home from "./Pages/Home/Home.jsx";
import Details from "./Pages/Details/Details.jsx";
import NavRes from "./Components/NavRes/NavRes.jsx";

function App() {
  const [searchApi, setSearchApi] = useState("");
  const [detailId, setDetailId] = useState("");

  return (
    <div className="App">
      <Router>
        <Route path="/" render={() => <Nav setSearchApi={setSearchApi} />} />
        <Route path="/" render={() => <NavRes />} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home setDetailId={setDetailId} />}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                searchApi={searchApi}
                setDetailId={setDetailId}
                setSearchApi={setSearchApi}
              />
            )}
          />
          <Route
            path="/details"
            render={() => <Details detailId={detailId} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
