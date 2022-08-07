import React from 'react'
import Product from '../Product/Product'
import { css, cx } from '@emotion/css'


const products = [
    {
        id: 1,
        name: 'Product1',
        price: '$100',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Product2',
        price: '$200',
        image: 'https://picsum.photos/200/300',
    },
]

const ProductsList = () => {
    return (
        <div className={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 20px;
        `}>
            {products && products.map(product => (
                <Product key={product.id} product={product} type={'productList'} />
            ))}
        </div>
    )
}

export default ProductsList