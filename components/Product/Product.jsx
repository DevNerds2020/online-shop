import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'

import { AddCircle } from '@emotion-icons/fluentui-system-regular/AddCircle'
import { RemoveCircle } from '@emotion-icons/ionicons-outline/RemoveCircle'

import { REMOVE_ITEM, ADD_ITEM } from '../../actions/shop'
import CustomLink from '../StyledTags/CustomLink/CustomLink'
import Container from './Container/Container'
import Button from '../StyledTags/Button/Button'
import ButtonContainer from '../StyledTags/ButtonContainer/ButtonContainer'


const Product = (props) => {
    const { product, type } = props
    const { name, price, image, id, count } = product
    const [, render] = useReducer(p => !p, false)

    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(ADD_ITEM(product))
        render()
    }

    const removeItem = () => {
        dispatch(REMOVE_ITEM(product.id))
        render()
    }
    return (
        <Container>
            <CustomLink name={name} url={`shop/${name}`} params={props.product} />
            <p>price: {price}</p>
            <img src={image} alt={name} />
            <div>
                <ButtonContainer>
                    <Button icon={<AddCircle />} text={'add'} handleClick={addItem} />
                    {type === 'cartList' && <Button icon={<RemoveCircle />} text={'remove'} handleClick={removeItem} />}
                </ButtonContainer>
                {type === 'cartList' && <div>count: {count}</div>}
            </div>
        </Container>
    )
}

export default Product