import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router'
import {Box, Heading} from 'grommet'
import Instructions from './components/Instructions'
// import AssignedAtBirth from './components/AssignedAtBirth'
// import BioSexSlider from './components/BioSexSlider'
import GenderExpressionSlider from './components/GenderExpressionSlider'
// import GenderIdentitySlider from './components/GenderIdentitySlider'

//Pages for Sliders
import Expression from './components/Expression'
import Identity from './components/Identity'
import Sex from './components/Sex'
import Attraction from './components/Attraction'

import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'

import './App.css';

function App() {
  return (
    <Box justify="center" className="App">
      <HeaderNav/>
      <Heading alignSelf="center" level="1">The Genderbread Explorer</Heading>
      <Instructions/>
      {/* <AssignedAtBirth/> */}
      {/* <BioSexSlider/> */}
      <GenderExpressionSlider/>
      {/* <GenderIdentitySlider/> */}
      <FooterNav/>


  {/* ROUTER */}
    <Switch>
      <Route exact path="/">
        <App/>
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

    </Box>


 
  );


 
}

export default App;
