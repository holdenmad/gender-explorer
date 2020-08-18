import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Box, Main } from "grommet";
// import AssignedAtBirth from './components/AssignedAtBirth'
// import BioSexSlider from './components/BioSexSlider'
// import GenderExpressionSlider from './components/GenderExpressionSlider'
// import GenderIdentitySlider from './components/GenderIdentitySlider'

// General Pages
import Splash from "./components/Splash";
import About from "./components/About";

// Gender Pages
import Expression from "./components/Expression";
import Identity from "./components/Identity";
import Sex from "./components/Sex";
import Attraction from "./components/Attraction";

// Components
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Box flex className="container">
        <HeaderNav />
        <Main flex={{grow: 3}} className="main">
      
          {/* ROUTER */}
          <Switch>
            <Route exact path="/">
              <Splash />
            </Route>
            <Route exact path="/expression">
              <Expression />
            </Route>
            <Route exact path="/identity">
              <Identity />
            </Route>
            <Route exact path="/sex">
              <Sex />
            </Route>
            <Route exact path="/attraction">
              <Attraction />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          </Main>
        <FooterNav />
      </Box>
      
    </BrowserRouter>
  );
}

export default App;
