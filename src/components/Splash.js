import React from "react";
import { Box, Image } from "grommet";
import Instructions from './Instructions'

const Splash = () => {
  return (
    <Box justify="center" align="center">
      <Box width="xlarge">
        <Image fill="horizontal" fit="cover" src="cockpit.jpg" />
      </Box>
      <Instructions/>
    </Box>
  );
};

export default Splash;
