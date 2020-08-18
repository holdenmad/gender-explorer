import React, { useState, useRef } from "react";
import { Box, RangeInput } from "grommet";

const attractionMatrix = {
    demisexual: {
        min: { femaleness: 10, maleness: 10 },
        max: { femaleness: 60, maleness: 60 },
        description: "Someone who only experiences sexual attraction after forming a strong emotional bond first or a romantic bond",
      },
      lesbian: {
        min: { femaleness: 80, maleness: 0 },
        max: { femaleness: 100, maleness: 20 },
        description: "Women (trans or cis) who are attracted only to other women.",
      },
      gay: {
        min: { femaleness: 0, maleness: 80 },
        max: { femaleness: 20, maleness: 100 },
        description: "Often refers to men (trans or cis) who are attracted only to other men, but can also refer to women.",
      },
      "straight female": {
        min: { femaleness: 0, maleness: 80 },
        max: { femaleness: 20, maleness: 100 },
        description: "Women who are only attracted to men. Generally someone who has a binary gender.",
      },
      "straight male": {
        min: { femaleness: 80, maleness: 0 },
        max: { femaleness: 100, maleness: 20 },
        description: "Men who are only attracted to women. Generally someone who has a binary gender.",
      },
      asexual: {
        min: { femaleness: 0, maleness: 0 },
        max: { femaleness: 30, maleness: 30 },
        description: "Not experiencing sexual attraction. Sometimes the term, ace, is used to describe asexuals.",
      },
      aromantic: {
        min: { femaleness: 0, maleness: 0 },
        max: { femaleness: 30, maleness: 30 },
        description: "Similar to asexual, but instead of no sexual attraction, describes someone who does not experience romantic attraction.",
      },
      bisexual: {
        min: { femaleness: 40, maleness: 40 },
        max: { femaleness: 100, maleness: 100 },
        description: "Someone who is attracted to two or more genders.  This term is generally used to describe being attracted to men and women, but can apply to being attracted to any two or more genders. Note that one do not have to be equally attracted to each gender.",
      },
      pansexual: {
        min: { femaleness: 60, maleness: 60 },
        max: { femaleness: 100, maleness: 100 },
        description: "Someone who is attracted to all genders and/or do not concern gender when one is attracted towards someone",
      },
      queer: {
        min: { femaleness: 0, maleness: 0 },
        max: { femaleness: 100, maleness: 100 },
        description: "A reclaimed slur for anybody in the LGBT+ community or who do not identify as cisgender and/or hetersexual/heteromantic",
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
              a11yTitle="Feminine Attraction Slider"
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
              a11yTitle="Masculine Attraction Slider"
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
