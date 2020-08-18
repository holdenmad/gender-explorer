import React from "react";
import { Box, Main, Heading, Paragraph, Image } from "grommet";
import BioSexSlider from "./BioSexSlider";

const Sex = () => {
  return (
    <Box align="center">
      <Heading level="2">Biological Sex</Heading>
      <Box height="medium" width="medium">
        <Image
          a11yTitle="Two alien scientists in a spacecraft just outside Earth running chromosomal tests on what looks like a fetus"
          fit="contain"
          src="/images/Alien-science-pana.png"
        />
      </Box>
      <Heading level="3">Instructions</Heading>
      <Main>
        <Paragraph>
          Biological sex is as complicated and diverse as identity and
          expression. These can include genitalia, body shape, voice pitch, body
          hair, hormones, chromosomes, etc. Although we are all assigned
          intersex, female, or male at birth by doctors, our sex characteristics
          aren't limited to that assignment, and also don't define our
          identities or how we express ourselves. For example, you can have all
          the sex characteristics of a typical female, but identify as male.
        </Paragraph>
        <Paragraph>
          <b>Use these sliders</b> to represent the 'femaleness' and 'maleness'
          of your physical sex characteristics. Again, have fun exploring the
          options, and don't worry if the suggestions don't align with how you
          identify. Only you can decide that.
        </Paragraph>
      </Main>
      <BioSexSlider />
    </Box>
  );
};

export default Sex;
