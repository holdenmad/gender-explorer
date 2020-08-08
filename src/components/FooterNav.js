import React from 'react'
import {Box, Nav, Footer, Anchor} from 'grommet'

const FooterNav = () => {
    return (
        <Footer margin={{"top": "large"}} justify="between" background="brand" pad="medium">
            <Nav direction="row">
            <Anchor>Github</Anchor>
            <Anchor>It's Pronounced Metrosexual</Anchor>
            </Nav>
        </Footer>
    )
}

export default FooterNav
