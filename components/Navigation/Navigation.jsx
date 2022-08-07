import React from 'react'
import Container from './Container/Container'
import Logo from './Logo/Logo'
import CustomLink from '../../components/StyledTags/CustomLink/CustomLink'
const Navigation = () => {
    return (
        <Container>
            <Container>
                <CustomLink name='shop' url='shop' />
                <CustomLink name='about' url='about' />
                <CustomLink name='contact' url='contact' />
            </Container>
            <Container>
                <Logo>
                    MegabizShop
                </Logo>
            </Container>
        </Container>
    )
}

export default Navigation;

