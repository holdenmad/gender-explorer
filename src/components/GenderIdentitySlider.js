import React, { useState, useRef } from "react";
import { Heading, Box, RangeInput } from "grommet";

const genderIdentityMatrix = {
  nonbinary: {
    min: { femaleness: 10, maleness: 10 },
    max: { femaleness: 90, maleness: 90 },
    description:
      "Also referred to as enby, this is a gender identity and umbrella term for gender identities that can’t be exclusively categorized as male or female.",
  },
  "cisgender female": {
    min: { femaleness: 80, maleness: 0 },
    max: { femaleness: 100, maleness: 20 },
    description: "A term used to describe a ",
  },
  "cisgender male": {
    min: { femaleness: 0, maleness: 80 },
    max: { femaleness: 20, maleness: 100 },
    description: "Description of cis male",
  },
  "transgender female": {
    min: { femaleness: 80, maleness: 0 },
    max: { femaleness: 100, maleness: 20 },
    description: "Description of cis female",
  },
  "transgender male": {
    min: { femaleness: 0, maleness: 80 },
    max: { femaleness: 20, maleness: 100 },
    description: "Description of cis male",
  },
  genderfluid: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 100, maleness: 100 },
    description: "Description of genderfluid",
  },
  agender: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 20, maleness: 20 },
    description: "Description of agender",
  },
  bigender: {
    min: { femaleness: 50, maleness: 50 },
    max: { femaleness: 100, maleness: 100 },
    description: "Description of bigender",
  },
  polygender: {
    min: { femaleness: 80, maleness: 80 },
    max: { femaleness: 100, maleness: 100 },
    description: "Description of polygender",
  },
  trans: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 100, maleness: 100 },
    description: "Description of trans",
  },
};

const GenderIdentitySlider = () => {
  //REFS
  const genderId1Ref = useRef();
  const genderId2Ref = useRef();

  //STATE
  const [genderId, setGenderId] = useState([]);

  const computeVal = () => {
    const f = genderId1Ref.current.value;
    const m = genderId2Ref.current.value;
    const matchingIdentities = Object.entries(genderIdentityMatrix).filter(
      (key) => {
        key = genderIdentityMatrix[key[0]];
        // console.log('coords:', f, m, key);
        return (
          f >= key.min.femaleness &&
          f <= key.max.femaleness &&
          m >= key.min.maleness &&
          m <= key.max.maleness
        );
      }
    );
    setGenderId(matchingIdentities);
  };

  //HANDLERS
  const handleGenderId1 = (e) => {
    computeVal();
  };
  const handleGenderId2 = (e) => {
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
    <Box margin="large">
      <Box width="medium" className="genderId1">
        Feminine
        <RangeInput
          onChange={handleGenderId1}
          ref={genderId1Ref}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          step={1}
          className="slider"
          label="Feminine Identity Slider"
        />
      </Box>
      <Box pad="small" width="medium" justify="between" direction="row">
        <Box direction="row">&#x20E0;</Box>

        <Box direction="row">&#8734;</Box>
      </Box>
      <Box width="medium" className="genderId2">
        Masculine
        <RangeInput
          onChange={handleGenderId2}
          ref={genderId2Ref}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          step={1}
          className="slider"
          label="Masculine Identity Slider"
        />
      </Box>
      <Box>
        {" "}
        {genderId.map((gender) => (
          <Box
            width="medium"
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

export default GenderIdentitySlider;
