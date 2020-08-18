import React, { useState, useRef } from "react";
import { Box, RangeInput } from "grommet";

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
    description:
      "Someone assigned female at birth who identifies with being female.",
  },
  "cisgender male": {
    min: { femaleness: 0, maleness: 80 },
    max: { femaleness: 20, maleness: 100 },
    description:
      "Someone assigned male at birth who identifies with being male.",
  },
  "transgender female": {
    min: { femaleness: 80, maleness: 0 },
    max: { femaleness: 100, maleness: 20 },
    description: "Someone assigned male at birth who identifies as female.",
  },
  transfeminine: {
    min: { femaleness: 60, maleness: 0 },
    max: { femaleness: 100, maleness: 30 },
    description: "Someone assigned male at birth who identifies as female.",
  },
  demigirl: {
    min: { femaleness: 50, maleness: 0 },
    max: { femaleness: 100, maleness: 50 },
    description: "This nonbinary gender identity describes someone who partially identifies as a girl, woman, womxn, or feminine.",
  },
  "transgender male": {
    min: { femaleness: 0, maleness: 80 },
    max: { femaleness: 20, maleness: 100 },
    description: "Someone assigned female at birth who identifies as male.",
  },
  transmasculine: {
    min: { femaleness: 0, maleness: 60 },
    max: { femaleness: 30, maleness: 100 },
    description: "Someone assigned female at birth who identifies as male.",
  },
  demiboy: {
    min: { femaleness: 0, maleness: 50 },
    max: { femaleness: 50, maleness: 100 },
    description: "This nonbinary gender identity describes someone who partially identifies as a boy, man, or masculine.",
  },
  genderfluid: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 100, maleness: 100 },
    description:
      "This label is used to describe gender identity or expression. It involves the experience of moving between genders or having a gender that changes over a particular period of time. For example, from moment to moment, day to day, month to month, year to year, or decade to decade.",
  },
  agender: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 20, maleness: 20 },
    description:
      "Someone who doesn’t identify with the idea or experience of having a gender.",
  },
  bigender: {
    min: { femaleness: 50, maleness: 50 },
    max: { femaleness: 100, maleness: 100 },
    description:
      "Someone identifies with two distinct genders. Bigender indicates the number of gender identities someone has.",
  },
  polygender: {
    min: { femaleness: 80, maleness: 80 },
    max: { femaleness: 100, maleness: 100 },
    description:
      "The experience of having multiple gender identities, simultaneously or over time. This term indicates the number of gender identities someone experiences, but doesn’t necessarily indicate which genders are included in the given person’s polygender identity.",
  },
  trans: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 100, maleness: 100 },
    description:
      "Also referred to as transgender. Both an umbrella term including many gender identities and a specific gender identity that describes those with a gender identity that’s different from the sex assigned at birth (male, female, or intersex).",
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
    <Box margin="large" align="center">
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
          a11yTitle="Feminine Identity Slider"
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
          a11yTitle="Masculine Identity Slider"
        />
      </Box>
      <Box align="center">
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
