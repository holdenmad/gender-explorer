import React from 'react'
import {Box, Nav, Footer, Anchor} from 'grommet'

const FooterNav = () => {
    return (
            <Footer margin={{"top": "xlarge"}} className="footer" fill="horizontal" justify="between" background="brand" pad="medium">
                <Nav direction="row">
                    <Box direction="row">
                        <i className="fab fa-github"></i><Anchor href="http://www.github.com/holdenmad/gender-explorer" margin={{left: 'small'}}>Github</Anchor>
                    </Box>
                    <Box direction="row">
                        <i className="fas fa-rainbow"></i><Anchor href="https://www.itspronouncedmetrosexual.com/" margin={{left: 'small'}}>It's Pronounced Metrosexual</Anchor>
                    </Box>
                    <Box direction="row">
                        Images from<Anchor margin={{left: 'xsmall'}} href="https://stories.freepik.com/">Stories.Freepik</Anchor>
                    </Box>
                </Nav>
            </Footer>
    )
}

export default FooterNav
