import React from "react";
import { Box, Main, Heading, Paragraph, Image } from "grommet";
import GenderIdentitySlider from "./GenderIdentitySlider";

const Identity = () => {
  return (
    <Box align="center">
      <Heading level="2">Gender Identity</Heading>
      <Box height="medium" width="medium">
        <Image
          a11yTitle="Alien in a UFO waving hello in the middle of space"
          fit="contain"
          src="/images/Outer-space-pana.png"
        />
      </Box>
      <Heading level="3">Instructions</Heading>
      <Main>
        <Paragraph>
          Our identity is how we think of ourselves. Sometimes it matches what
          we were assigned at birth or how people see us, and sometimes not.
          Gender is often thought to be male or female, but there are actually
          many more options! Most genders are beyond this binary, and some are a
          lack of gender completely. Let the exploration begin!
        </Paragraph>
        <Paragraph>
          <b>Use these sliders</b> to represent the 'femaleness' and 'maleness'
          of how you think of yourself. Think of the sliders as how intensely
          you feel these two things. This can mean anything, and we can't tell
          you how to define this, but think about what makes you comfortable,
          and when you feel most like yourself. What does that look like? Maybe
          you identity with one, the other, both, or neither!
        </Paragraph>
      </Main>
      <GenderIdentitySlider />
    </Box>
  );
};

export default Identity;
