import React from 'react'

import Container from './Container/Container'
import Logo from './Logo/Logo'
import CustomLink from '../../components/StyledTags/CustomLink/CustomLink'
import ShoppingBag from '../ShoppingBag/ShoppingBag'

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
                <CustomLink url='shop/cart' >
                    <ShoppingBag />
                </CustomLink>
            </Container>
        </Container>
    )
}

export default Navigation;

