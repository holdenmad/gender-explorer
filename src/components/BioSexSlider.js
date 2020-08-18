import React, { useState, useRef } from "react";
import { Box, RangeInput } from "grommet";

const sexMatrix = {
  intersex: {
    min: { femaleness: 10, maleness: 10 },
    max: { femaleness: 90, maleness: 90 },
    description:
      "An umbrella term that describes people who have sex characteristics — such as chromosomes, internal organs, hormones, or anatomy — that can’t be easily categorized into the binary sex framework of male or female.",
  },
  "cisgender female": {
    min: { femaleness: 70, maleness: 0 },
    max: { femaleness: 100, maleness: 30 },
    description:
      "A person assigned female at birth who also identifies as female.",
  },
  "cisgender male": {
    min: { femaleness: 0, maleness: 70 },
    max: { femaleness: 30, maleness: 100 },
    description: "A person assigned male at birth who also identifies as male.",
  },
  "trans female": {
    min: { femaleness: 30, maleness: 0 },
    max: { femaleness: 100, maleness: 70 },
    description:
      "Women who were assigned male at birth, also known as trans women, transfeminine people, etc. The acronym MTF (Male-to-female) is sometimes used, but cautiously.",
  },
  "trans male": {
    min: { femaleness: 0, maleness: 30 },
    max: { femaleness: 70, maleness: 100 },
    description:
      "Men who were assigned female at birth, also known as trans men, transmasculine people, etc. The acronym FTM (Female-to-male) is sometimes used, but cautiously.",
  },
  trans: {
    min: { femaleness: 0, maleness: 0 },
    max: { femaleness: 100, maleness: 100 },
    description:
      "Also referred to as transgender. Both an umbrella term including many gender identities and a specific gender identity that describes those with a gender identity that’s different from the sex assigned at birth (male, female, or intersex).",
  },
};

const BioSexSlider = () => {
  //REFS
  const sex1Ref = useRef();
  const sex2Ref = useRef();

  //STATE
  const [sex, setSex] = useState([]);

  const computeVal = () => {
    const f = sex1Ref.current.value;
    const m = sex2Ref.current.value;
    const matchingIdentities = Object.entries(sexMatrix).filter((key) => {
      key = sexMatrix[key[0]];
      // console.log('coords:', f, m, key);
      return (
        f >= key.min.femaleness &&
        f <= key.max.femaleness &&
        m >= key.min.maleness &&
        m <= key.max.maleness
      );
    });
    setSex(matchingIdentities);
  };

  //HANDLERS
  const handleSex1 = (e) => {
    computeVal();
  };
  const handleSex2 = (e) => {
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
      <Box width="medium" className="sex1">
        Female
        <RangeInput
          onChange={handleSex1}
          ref={sex1Ref}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          step={1}
          className="slider"
          a11yTitle="Female Sex Slider"
        />
      </Box>
      <Box pad="small" width="medium" justify="between" direction="row">
        <Box direction="row">&#x20E0;</Box>

        <Box direction="row">&#8734;</Box>
      </Box>
      <Box width="medium" className="sex2">
        Male
        <RangeInput
          onChange={handleSex2}
          ref={sex2Ref}
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          step={1}
          className="slider"
          a11yTitle="Male Sex Slider"
        />
      </Box>
      <Box align="center">
        {" "}
        {sex.map((sex) => (
          <Box
            key={sex[0]}
            width="medium"
            margin="small"
            pad="small"
            border={{ size: "small", color: "accent-1" }}
          >
            {`${sex[0]}: ${sex[1].description}`}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BioSexSlider;
