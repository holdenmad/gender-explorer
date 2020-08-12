import React from "react";
import { Box, Image } from "grommet";

const Splash = () => {
  return (
    <Box justify="center" align="center">
      <Box width="large">
        <Image fill="width" fit="cover" src="cockpit.jpg" />
        {/* <Image 
            fill="horizontal"
            fit="contain"
            src="astronaut.png"
        /> */}
      </Box>
    </Box>
  );
};

export default Splash;
