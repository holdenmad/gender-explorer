import React from 'react'
import {useHistory} from 'react-router'
import {Header, Nav, Anchor, Box, Text, Menu, ResponsiveContext, Icon} from 'grommet'
// import {Menu} from 'grommet-icons'

// const studentClicked = id => {
//     history.push("/students/" + id);
//   };

const HeaderNav = () => {
    let history = useHistory();
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
                                { label: 'Expression', onClick: () => {history.push("/expression")} },
                                { label: 'Identity', onClick: () => {history.push("/identity")} },
                                { label: 'Sex', onClick: () => {history.push("/sex")} },
                                { label: 'Attraction', onClick: () => {history.push("/attraction")} }
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
