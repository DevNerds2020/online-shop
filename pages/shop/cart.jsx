import React from 'react'
import { useSelector } from 'react-redux'

import { ReceiptPlay } from '@emotion-icons/fluentui-system-filled/ReceiptPlay'

import Layout from '../../components/Layout/Layout'
import Product from '../../components/Product/Product'
import Button from '../../components/StyledTags/Button/Button'

const cart = () => {
  const products = useSelector(state => state.shop.products)

  return (
    <Layout>
      {
        products.length > 0 ? products.map(product => (
          <div>
            <Button icon={<ReceiptPlay />} text={'Receipt'} />
            <Product key={product.id} product={product} type={'cartList'} />
          </div>
        )) : <div> you have no item in your purchase list add something !</div>
      }
    </Layout>
  )
}

export default cart