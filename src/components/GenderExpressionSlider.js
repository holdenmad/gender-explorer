import React, { useState, useRef } from "react";
import { Box, RangeInput } from "grommet";

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
    description: "Primarily used in LGBTQIA+ communities, this term typically describes someone with a presentation, sexuality, or gender that’s considered masculine.",
  },
  "masculine-presenting": {
    min: { femininity: 0, masculinity: 60 },
    max: { femininity: 40, masculinity: 100 },
    description: "Primarily used in LGBTQIA+ communities, this term typically describes someone with a presentation, sexuality, or gender that’s considered masculine.",
  },
  femme: {
    min: { femininity: 80, masculinity: 0 },
    max: { femininity: 100, masculinity: 20 },
    description: "This is a label for a gender identity or expression that describes someone with a gender that is or leans towards feminine. Some femmes also identify as women, while many others don’t.",
  },
  "feminine-presenting": {
    min: { femininity: 60, masculinity: 0 },
    max: { femininity: 100, masculinity: 40 },
    description: "This is a label for a gender identity or expression that describes someone with a gender that is or leans towards feminine. Some femmes also identify as women, while many others don’t.",
  },
  androgyne: {
    min: { femininity: 40, masculinity: 40 },
    max: { femininity: 70, masculinity: 70 },
    description: "Someone who has a gender presentation or identity that’s gender neutral, androgynous, or has both masculine and feminine characteristics.",
  },
  genderfluid: {
    min: { femininity: 0, masculinity: 0 },
    max: { femininity: 100, masculinity: 100 },
    description: "This label is used to describe gender identity or expression. It involves the experience of moving between genders or having a gender that changes over a particular period of time. For example, from moment to moment, day to day, month to month, year to year, or decade to decade.",
  },
  agender: {
    min: { femininity: 0, masculinity: 0 },
    max: { femininity: 20, masculinity: 20 },
    description: "Someone who doesn’t identify with the idea or experience of having a gender.",
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
    const matchingExpressions = Object.entries(genderExpMatrix).filter(
      (key) => {
        key = genderExpMatrix[key[0]];
        // console.log('coords:', f, m, key);
        return (
          f >= key.min.femininity &&
          f <= key.max.femininity &&
          m >= key.min.masculinity &&
          m <= key.max.masculinity
        );
      }
    );
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
    <Box>
      <Box margin="large">
        <Box width="medium" className="genderexp1">
          Feminine
          <RangeInput
            onChange={handleGenderExp1}
            ref={genderexp1Ref}
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            step={0.1}
            className="slider"
            a11yTitle="Feminine Expression Slider"
          />
        </Box>
        <Box pad="small" width="medium" justify="between" direction="row">
          <Box direction="row">&#x20E0;</Box>

          <Box direction="row">&#8734;</Box>
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
            step={0.1}
            className="slider"
            a11yTitle="Masculine Expression Slider"
          />
        </Box>
      </Box>
      <Box>
        {" "}
        {genderExp.map((gender) => (
          <Box
            key={gender[0]}
            margin="small"
            pad="small"
            border={{ size: "small", color: "accent-1" }}
          >
            {`${gender[0]}: ${gender[1].description}`}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GenderExpressionSlider;
