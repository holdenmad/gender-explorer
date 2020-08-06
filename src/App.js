import React, {useState} from 'react';
import Instructions from './components/Instructions'
import BioSexSlider from './components/BioSexSlider'
import GenderExpressionSlider from './components/GenderExpressionSlider'
import './App.css';

function App() {
  const [biosex1, setBiosex1] = useState();

  return (
    <div className="App">
      <h1>The Genderbread Game</h1>
      <Instructions/>
      {/* <BioSexSlider/> */}
      <GenderExpressionSlider/>
    </div>
  );
}

export default App;
