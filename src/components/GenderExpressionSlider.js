import React, { useState, useRef } from "react";
import { Box, Anchor, RangeInput, Text, Heading } from "grommet";

const genderExpMatrix = {
  // "top-right-quadrant": {
  // 	min: { femininity: 50, masculinity: 50 },
  // 	max: { femininity: 100, masculinity: 100 }
  // },
  // "bottom-right-quadrant": {
  // 	min: { femininity: 50, masculinity: 0 },
  // 	max: { x: 100, masculinity: 50 }
  // },
  // "top-left-quadrant": {
  // 	min: { femininity: 0, masculinity: 50 },
  // 	max: { femininity: 50, masculinity: 100 }
  // },
  // "bottom-left-quadrant": {
  // 	min: { femininity: 0, masculinity: 0 },
  // 	max: { femininity: 50, masculinity: 50 }
  // },

  butch: {
    min: { femininity: 0, masculinity: 80 },
    max: { femininity: 20, masculinity: 100 },
    description: "Description of Butch"
  },
  femme: {
    min: { femininity: 80, masculinity: 0 },
    max: { femininity: 100, masculinity: 20 },
    description: "Description of femme"

  },
  androgynous: {
    min: { femininity: 40, masculinity: 40 },
    max: { femininity: 70, masculinity: 70 },
    description: "Description of andrygynous"

  },
  nonbinary: {
    min: { femininity: 10, masculinity: 10 },
    max: { femininity: 90, masculinity: 90 },
    description: "Description of nonbinary"

  },
  genderfluid: {
    min: { femininity: 0, masculinity: 0 },
    max: { femininity: 100, masculinity: 100 },
    description: "Description of genderfluid"

  },
  agender: {
    min: { femininity: 0, masculinity: 0 },
    max: { femininity: 20, masculinity: 20 },
    description: "Description of agender"

  },
};

const GenderExpressionSlider = () => {
  //REFS
  const genderexp1Ref = useRef();
  const genderexp2Ref = useRef();

  //STATE
  const [genderExp, setGenderExp] = useState([]);

  const computeVal = () => {
    const f = genderexp1Ref.current.value;
    const m = genderexp2Ref.current.value;

    //change this so you filter the whole object rather than just the key
    const matchingExpressions = Object.keys(genderExpMatrix).filter((key) => {
      key = genderExpMatrix[key];
      console.log("coords:", f, m, key);
      return (
        f >= key.min.femininity &&
        f <= key.max.femininity &&
        m >= key.min.masculinity &&
        m <= key.max.masculinity
      );
    });
    console.log(matchingExpressions);
    setGenderExp(matchingExpressions);
  };

  //HANDLERS
  const handleGenderExp1 = (e) => {
    computeVal();
  };
  const handleGenderExp2 = (e) => {
    computeVal();
  };

  /*
    // Logic of Sliders:
    - Create data structure to throw terms we want to focus on
    - Think of it like the dimensions of a crane game (matrix)
    - Some things occupy the same space (like having a squirtle under a pikachu)
    - Matrixes can have overlapping values

    */

  return (
    <Box align="center">
      <Heading level="2">Gender Expression</Heading>
      <Box width="medium" className="genderexp1">
        Feminine
        <RangeInput
          onChange={handleGenderExp1}
          ref={genderexp1Ref}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          step={1}
          className="slider"
          label="Feminine Expression Slider"
        />
      </Box>
      <Box width="medium" className="genderexp2">
        Masculine
        <RangeInput
          onChange={handleGenderExp2}
          ref={genderexp2Ref}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          step={1}
          className="slider"
          label="Masculine Expression Slider"
        />
      </Box>
      <Box>
        {genderExp.map((name) => (
          <Box
            margin="small"
            pad="small"
            border={{ size: "small", color: "accent-1" }}
          >{name}
          </Box>
        ))}

      </Box>
    </Box>
  );
};

export default GenderExpressionSlider;
