import React from "react";
import { Box, Text } from "grommet";
import Instructions from "./Instructions";
import Lottie from "react-lottie";
import animationData from "../lotties/astronaout";
// import animationData from "../lotties/GrowthAnimation";

const Splash = () => {
  const astronaut = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box justify="center" align="center">
      <Text
        weight="bold"
        size="xxlarge"
        // style={{ fontFamily: "Times New Roman" }}
        margin={{ top: "medium" }}
        alignSelf="center"
        level="2"
      >
        Welcome, explorer!
      </Text>

      <Box width="xlarge">
        <Lottie title="Astronaut animation" ariaLabel="Animation of a floating astronaut reading a map to navigate through Gender Space!" options={astronaut} height={500} width={500} />
        {/* <Image fill="horizontal" fit="cover" src="cockpit.jpg" /> */}
      </Box>

      <Box a11yTitle="Image of a spaceship's cockpit flying between Saturn and Neptune. Instructions are layered over the image." width="xlarge" background={{ image: "url(cockpit.jpg)", opacity: true }}>
        <Box background={{color: 'black', opacity: true}}>
        <Instructions />

        </Box>
      </Box>
    </Box>
  );
};

export default Splash;
