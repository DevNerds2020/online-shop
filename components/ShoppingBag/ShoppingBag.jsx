import React from 'react'
import { useSelector } from 'react-redux'
import { ShoppingCart } from '@emotion-icons/entypo/ShoppingCart'
import { css, cx } from '@emotion/css'

import Button from '../StyledTags/Button/Button'
import { calculateTotalCount } from '../../helper/shop.helper'

const ShoppingBag = () => {
    const { products } = useSelector(state => state.shop)

    return (
        <div
            className={
                css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                `
            }>
            <Button icon={<ShoppingCart />} />
            <div
                className={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    margin-bottom: 30px;
                    font-size: 15px;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    background-color: aliceblue;

                `}>
                {calculateTotalCount(products)}
            </div>
        </div>
    )
}

export default ShoppingBag