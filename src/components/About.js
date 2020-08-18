import React from "react";
import { Heading, Paragraph, Box, Anchor, Text, Image } from "grommet";

const About = () => {
  return (
    <Box align="center">
      <Heading level="2">About</Heading>
      <Box height="small" width="small">
        <Image
          a11yTitle="A pretty purple nebula"
          fit="contain"
          src="/images/mirage-134.png"
        />
      </Box>

      <Heading level="3">The Project</Heading>
      <Paragraph>
        'Gender Explorer' was inspired by{" "}
        <Anchor href="https://www.genderbread.org/">
          The Genderbread Person
        </Anchor>{" "}
        by Sam Killermann of{" "}
        <Anchor href="https://www.itspronouncedmetrosexual.com/">
          It's Pronounced Metrosexual
        </Anchor>
        . I wanted to bring it to life in a fun and open way, that encourages
        you to explore your own gender, and the infinite possibilities, just as
        space has infinite possibilities for us to explore.
      </Paragraph>

      <Heading level="3">Me!</Heading>
      <Paragraph>
        I'm a bright-eyed junior developer with a passion for queer and trans
        activism, intersectional feminism, and a background in classical music.
        If you're interested to read more,{" "}
        <Anchor href="https://www.nytimes.com/2019/07/11/arts/music/transgender-opera-singers.html">
          check out this The New York Times article about transgender opera
          singers
        </Anchor>
        , and{" "}
        <Anchor href="http://www.holdenmadagame.com">
          my personal singing website
        </Anchor>
        .
      </Paragraph>

      <Heading level="3">Connect</Heading>
      <Box>
        <Box margin="small" direction="row">
          <i className="fab fa-github-square fa-2x"></i>
          <Anchor
            margin={{ left: "small" }}
            alignSelf="center"
            href="https://github.com/holdenmad"
          >
            Github
          </Anchor>
        </Box>
        <Box margin="small" direction="row">
          <i className="fab fa-linkedin fa-2x"></i>
          <Anchor
            margin={{ left: "small" }}
            alignSelf="center"
            href="https://www.linkedin.com/in/holdenmad/"
          >
            LinkedIn
          </Anchor>
        </Box>
        <Box margin="small" direction="row">
          <i className="fas fa-envelope-square fa-2x"></i>
          <Anchor
            margin={{ left: "small" }}
            alignSelf="center"
            href="mailto:holden.madagame@gmail.com"
          >
            Email
          </Anchor>
        </Box>
      </Box>

      <Heading level="3">Attributions</Heading>
      <Box width="medium">
        <ul>
          <li>
            Most images from{" "}
            <Anchor href="https://stories.freepik.com/">
              https://stories.freepik.com/
            </Anchor>
          </li>
          <li direction="row">
            Cockpit vector used thanks to{" "}
            <Anchor href="www.freevector.com">www.freevector.com</Anchor>
          </li>
          <li direction="row">
            Above illustration by <Anchor href="undefined">Icons 8</Anchor> from{" "}
            <Anchor href="https://icons8.com/">Icons8</Anchor>
          </li>
          <li direction="row">
            Reference to gender identities and expressions from{" "}
            <Anchor href="https://www.healthline.com/health/different-genders">
              this wonderful article by{" "}
            </Anchor>
            <Anchor href="https://www.instagram.com/meretheir/">
              Mere Abrams
            </Anchor>
          </li>
          <li direction="row">
            Reference to sexualities from{" "}
            <Anchor href="http://thepbhscloset.weebly.com/a-list-of-genders--sexualities-and-their-definitions.html">
              The PBHS Closet
            </Anchor>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default About;
