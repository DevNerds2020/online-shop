import React from 'react'
import { useDispatch } from 'react-redux'

import { AddCircle } from '@emotion-icons/fluentui-system-regular/AddCircle'

import CustomLink from '../StyledTags/CustomLink/CustomLink'
import Container from './Container/Container'
import Button from '../StyledTags/Button/Button'


const Product = (props) => {
    const { product } = props
    const { name, price, image, id } = product

    const dispatch = useDispatch()

    const addItem = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: product,
        })
    }
    return (
        <Container>
            <CustomLink name={name} url={`shop/${name}`} params={props.product} />
            <p>price: {price}</p>
            <img src={image} alt={name} />
            <Button icon={<AddCircle />} text={'add'} handleClick={addItem} />
        </Container>
    )
}

export default Product