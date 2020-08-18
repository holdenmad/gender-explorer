import React from "react";
import { Box, Main, Paragraph, Heading, Image } from "grommet";

import GenderExpressionSlider from "./GenderExpressionSlider";

const Expression = () => {
  return (
    <Box align="center">
      <Heading level="2">Gender Expression</Heading>
      <Box height="medium" width="medium">
        <Image
          a11yTitle="Alien surrounded by pods of various kinds of bodies in a space vessel. The alien is playing with a molecule."
          fit="contain"
          src="/images/Alien-science-amico.png"
        />
      </Box>
      <Heading level="3">Instructions</Heading>
      <Main>
        <Paragraph>
          How we express our gender is an important part of who we are. This is
          sometimes how we express our gender identity, but sometimes its an
          extension that has nothing to do with it. For example, we usually have
          feelings about the color and styles of our clothes, our haircuts, the
          way we speak and act, etc. These things are parts of what define our
          gender expression.
        </Paragraph>
        <Paragraph>
          <b>Use these sliders</b> to represent the 'femininity' and
          'masculinity' of how you express yourself. While exploring, you may
          start to question what feminity and masculinity even are. How
          exciting!
        </Paragraph>
      </Main>
      <GenderExpressionSlider />
    </Box>
  );
};

export default Expression;
