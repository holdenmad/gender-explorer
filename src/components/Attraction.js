import React from "react";
import { Box, Heading, Paragraph } from "grommet";

import AttractionSlider from "./AttractionSlider";

const Attraction = () => {
  return (
    <Box align="center">
      <Heading level="2">Attraction</Heading>
      <Heading level="3">Instructions</Heading>
      <Paragraph>
        Attraction is usually romantic or sexual (sometimes other things!). Your
        romantic and sexual attraction might be the same, or very different! For
        example, you might be physically attracted to people of your gender, but
        emotionally attracted to people with different genders! Maybe you're not
        attracted to anybody, or you're attracted to everybody. The
        possibilities are as infinite as the universe.
      </Paragraph>
      <Paragraph>
        <b>Use these sliders</b> to explore the who/what you're attracted to,
        and how strongly you're attracted to people in general. Since (as we
        found out) gender and sex are more complicated than two options, you
        might need to explore your ideas of attraction too. There are probably
        more options than you thought!
      </Paragraph>
      <AttractionSlider />
    </Box>
  );
};

export default Attraction;
