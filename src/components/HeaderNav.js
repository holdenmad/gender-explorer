import React from 'react'
import {Header, Nav, Anchor, Box, Menu, ResponsiveContext, Icon} from 'grommet'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

// const studentClicked = id => {
//     history.push("/students/" + id);
//   };

const HeaderNav = () => {
    return (
            <Header pad="medium" background="brand">
                <Box direction="row">
                    <span><i class="fas fa-user-astronaut fa-2x"></i></span>
                    <Anchor size="large" margin={{left: 'small'}} alignSelf="center" href="/" label="Gender Explorer" weight="bold"></Anchor>
                </Box>
                <ResponsiveContext.Consumer>
                {responsive =>
                    responsive === 'small' ? (
                        <Menu
                            label="&#x2630;"
                            items={[
                                {label: 'About', href: "/about"},
                                {label: 'Expression', href: "/expression"},
                                {label: 'Identity', href: "/identity"},
                                {label: 'Sex', href: "/sex"},
                                {label: 'Attraction', href: "/attraction"}
                            ]}
                            />
                        ) : (
                    <Nav justify="end" direction="row">
                        <Anchor href="/About" label="About"></Anchor>
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
