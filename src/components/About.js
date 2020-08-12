import React from "react";
import { Heading, Paragraph, Box, Anchor, Text } from "grommet";

const About = () => {
  return (
    <Box align="center">
      <Heading level="2">About</Heading>

      <Heading level="3">The Project</Heading>
      <Paragraph>
        'Gender Explorer' was inspired by{" "}
        <Anchor href="https://www.genderbread.org/">
          The Genderbread Person
        </Anchor>{" "}
        by Sam Killermann of{" "}
        <Anchor href="https://www.itspronouncedmetrosexual.com/">
          It's Pronounced Metrosexual
        </Anchor>. I wanted to bring it to life in a fun and
          open way, that encourages you to explore your own gender, and the
          infinite possibilities, just as space has infinite possibilities for us to explore. 
      </Paragraph>

      <Heading level="3">Me!</Heading>
      <Paragraph>
        I'm a bright-eyed junior developer with a passion for queer and trans
        activism, and a background in classical music. If you're interested to
        read more,{" "}
        <Anchor>
          check out this The New York Times article about transgender opera
          singers
        </Anchor>
        , and <Anchor>my personal singing website</Anchor>.
      </Paragraph>

      <Heading level="3">Connect</Heading>
      <Box>
        <Box margin="small" direction="row"><i class="fab fa-github-square fa-2x"></i><Anchor margin={{left: 'small'}} alignSelf="center" href="https://github.com/holdenmad">Github</Anchor></Box>
        <Box margin="small" direction="row"><i class="fab fa-linkedin fa-2x"></i><Anchor margin={{left: 'small'}} alignSelf="center" href="https://www.linkedin.com/in/holdenmad/">LinkedIn</Anchor></Box>
        <Box margin="small" direction="row"><i class="fas fa-envelope-square fa-2x"></i><Anchor margin={{left: 'small'}} alignSelf="center" href="">Email</Anchor></Box>
      </Box>


      <Heading level="3">Attributions</Heading>
      <Text>People vector created by pch.vector - <Anchor href="https://www.freepik.com/vectors/people">www.freepik.com</Anchor></Text>
      <Text>Cockpit vector used thanks to <Anchor href="www.freevector.com">www.freevector.com</Anchor></Text>
    </Box>
  );
};

export default About;
