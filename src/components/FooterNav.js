import React from 'react'
import {Box, Nav, Footer, Anchor} from 'grommet'

const FooterNav = () => {
    return (
        <Box>
            <Footer className="footer" fill="horizontal" margin={{"top": "large"}} justify="between" background="brand" pad="medium">
                <Nav direction="row">
                    <Box direction="row">
                        <i class="fab fa-github"></i><Anchor margin={{left: 'small'}}>Github</Anchor>
                    </Box>
                    <Box direction="row">
                        <i class="fas fa-rainbow"></i><Anchor margin={{left: 'small'}}>It's Pronounced Metrosexual</Anchor>
                    </Box>
                </Nav>
            </Footer>
        </Box>
    )
}

export default FooterNav
