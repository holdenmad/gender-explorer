import React from 'react'
import {Main, Heading, Paragraph} from 'grommet'

const Instructions = () => {
    return (
        <Main background={{color: 'black', opacity: true}} pad="medium" margin="xlarge" border={{size: "small"}} align="center" justify="center">
            <Heading color="white" level="2">Instructions</Heading>
            <Paragraph color="white">For each slider, take a few seconds and think
             about yourself and how this continuum jives with you.
             At the end, we'll give you a few genders/sexualities 
             that you might identify with! :D </Paragraph>
             <Paragraph color="white"><strong>IMPORTANT:</strong> If you don't identify with any of the
             terms given, don't stress or feel bad. Gender's a big
             lovely soup! This is just to give you some ideas and open
             your mind to the literally infinite possibilities.</Paragraph>
        </Main>
    )
}

export default Instructions
