import React from 'react'
import CustomLink from '../StyledTags/CustomLink/CustomLink'
import Container from './Container/Container'

const Product = (props) => {
    const { name, price, image } = props.product
    return (
        <Container>
            <CustomLink name={name} url={`shop/${name}`} params={props.product} />
            <p>price: {price}</p>
            <img src={image} alt={name} />
        </Container>
    )
}

export default Product