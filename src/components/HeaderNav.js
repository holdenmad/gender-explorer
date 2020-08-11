import React from 'react'
import {Header, Nav, Anchor, Box, Text, Menu, ResponsiveContext, Icon} from 'grommet'

// const studentClicked = id => {
//     history.push("/students/" + id);
//   };

const HeaderNav = () => {
    return (
            <Header pad="medium" background="brand">
                <Box>
                    <Anchor href="/" label="Genderbread Explorer" weight="bold"></Anchor>
                </Box>
                <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === 'small' ? (
                        <Menu
                            label="&#x2630;"
                            items={[
                                {label: 'Expression', href: "/expression"},
                                {label: 'Identity', href: "/identity"},
                                {label: 'Sex', href: "/sex"},
                                {label: 'Attraction', href: "/attraction"}
                            ]}
                            />
                        ) : (
                    <Nav justify="end" direction="row">
                        <Anchor href="/expression" label="Expression"></Anchor>
                        <Anchor href="/identity" label="Identity"></Anchor>
                        <Anchor href="/sex" label="Sex"></Anchor>
                        <Anchor href="/attraction" label="Attraction"></Anchor>
                    </Nav>
            
    )
}
</ResponsiveContext.Consumer>
</Header>
)}

export default HeaderNav
