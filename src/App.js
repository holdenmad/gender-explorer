import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {Box, Heading} from 'grommet'
import Instructions from './components/Instructions'
// import AssignedAtBirth from './components/AssignedAtBirth'
// import BioSexSlider from './components/BioSexSlider'
// import GenderExpressionSlider from './components/GenderExpressionSlider'
// import GenderIdentitySlider from './components/GenderIdentitySlider'

//Pages for Sliders
import Expression from './components/Expression'
import Identity from './components/Identity'
import Sex from './components/Sex'
import Attraction from './components/Attraction'

import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
import Splash from './components/Splash'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Box justify="center" className="App">
      <HeaderNav/>
      <Heading alignSelf="center" level="1">The Genderbread Explorer</Heading>
      <Instructions/>

      {/* ROUTER */}
    <Switch>
      <Route exact path="/">
        <Splash/>
      </Route>
      <Route exact path="/expression">
        <Expression/>
      </Route>
      <Route exact path="/identity">
        <Identity/>
      </Route>
      <Route exact path="/sex">
        <Sex/>
      </Route>
      <Route exact path="/attraction">
        <Attraction/>
      </Route>
    </Switch>
      <FooterNav/>


  

    </Box>


</BrowserRouter>
  );


 
}

export default App;
