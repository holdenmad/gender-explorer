import React from 'react'
import {Header, Nav, Anchor, Box, Text, Menu, ResponsiveContext, Icon} from 'grommet'
// import {Menu} from 'grommet-icons'

const HeaderNav = () => {
    return (
            <Header pad="medium" background="brand">
                <Box>
                    <Text weight="bold">Genderbread Explorer</Text>
                </Box>
                <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === 'small' ? (
                        <Menu
                            label="&#x2630;"
                            items={[
                                { label: 'Expression', onClick: () => {} },
                                { label: 'Identity', onClick: () => {} },
                                { label: 'Sex', onClick: () => {} },
                                { label: 'Attraction', onClick: () => {} }
                            ]}
                            />
                        ) : (
                    <Nav justify="end" direction="row">
                        <Anchor label="Expression"></Anchor>
                        <Anchor label="Identity"></Anchor>
                        <Anchor label="Sex"></Anchor>
                        <Anchor label="Attraction"></Anchor>
                    </Nav>
            
    )
}
</ResponsiveContext.Consumer>
</Header>
)}

export default HeaderNav
