import React, { useState, useRef } from "react";
import { Heading, Box, RangeInput } from "grommet";

const attractionMatrix = {
    demi: {
        min: { femaleness: 10, maleness: 10 },
        max: { femaleness: 60, maleness: 60 },
        description: "Description of nonbinary",
      },
      lesbian: {
        min: { femaleness: 80, maleness: 0 },
        max: { femaleness: 100, maleness: 20 },
        description: "Description of cis female",
      },
      gay: {
        min: { femaleness: 0, maleness: 80 },
        max: { femaleness: 20, maleness: 100 },
        description: "Description of cis male",
      },
      "straight female": {
        min: { femaleness: 0, maleness: 80 },
        max: { femaleness: 20, maleness: 100 },
        description: "Description of cis female",
      },
      "straight male": {
        min: { femaleness: 80, maleness: 0 },
        max: { femaleness: 100, maleness: 20 },
        description: "Description of straight",
      },
      asexual: {
        min: { femaleness: 0, maleness: 0 },
        max: { femaleness: 30, maleness: 30 },
        description: "Description of asexual",
      },
      aromantic: {
        min: { femaleness: 0, maleness: 0 },
        max: { femaleness: 30, maleness: 30 },
        description: "Description of aromantic",
      },
      bisexual: {
        min: { femaleness: 40, maleness: 40 },
        max: { femaleness: 100, maleness: 100 },
        description: "Description of bigender",
      },
      pansexual: {
        min: { femaleness: 60, maleness: 60 },
        max: { femaleness: 100, maleness: 100 },
        description: "Description of polygender",
      },
      queer: {
        min: { femaleness: 0, maleness: 0 },
        max: { femaleness: 100, maleness: 100 },
        description: "Description of trans",
      },
    };
    
    const AttractionSlider = () => {
      //REFS
      const attractionId1Ref = useRef();
      const attractionId2Ref = useRef();
    
      //STATE
      const [attraction, setAttractionId] = useState([]);
    
      const computeVal = () => {
        const f = attractionId1Ref.current.value;
        const m = attractionId2Ref.current.value;
        const matchingIdentities = Object.entries(attractionMatrix).filter(
          (key) => {
            key = attractionMatrix[key[0]];
            // console.log('coords:', f, m, key);
            return (
              f >= key.min.femaleness &&
              f <= key.max.femaleness &&
              m >= key.min.maleness &&
              m <= key.max.maleness
            );
          }
        );
        setAttractionId(matchingIdentities);
      };
    
      //HANDLERS
      const handleAttractionId1 = (e) => {
        computeVal();
      };
      const handleAttractionId2 = (e) => {
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
        <Box margin="large">
          <Box width="medium" className="attractionId1">
            Female/Femaleness/Femininity
            <RangeInput
              onChange={handleAttractionId1}
              ref={attractionId1Ref}
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              step={1}
              className="slider"
              label="Feminine Attraction Slider"
            />
          </Box>
          <Box pad="small" width="medium" justify="between" direction="row">
          <Box direction="row">&#x20E0;</Box>

          <Box direction="row">&#8734;</Box>
        </Box>
          <Box width="medium" className="attractionId2">
            Man/Maleness/Masculinity
            <RangeInput
              onChange={handleAttractionId2}
              ref={attractionId2Ref}
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              step={1}
              className="slider"
              label="Masculine Attraction Slider"
            />
          </Box>
          <Box>
            {" "}
            {attraction.map((attraction) => (
              <Box
                key={attraction[0]}
                margin="small"
                pad="small"
                border={{ size: "small", color: "accent-1" }}
              >
                {`${attraction[0]}: ${attraction[1].description}`}
              </Box>
            ))}
          </Box>
        </Box>
      );
    };

export default AttractionSlider
