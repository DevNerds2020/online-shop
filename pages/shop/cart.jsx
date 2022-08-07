import React from 'react'
import { useSelector } from 'react-redux'

import Layout from '../../components/Layout/Layout'
import Product from '../../components/Product/Product'

const cart = () => {
  const products = useSelector(state => state.shop.products)

  return (
    <Layout>
      {
        products.length > 0 ? products.map(product => (
          <Product key={product.id} product={product} />
        )) : <div> you have no item in your purchase list add something !</div>
      }
    </Layout>
  )
}

export default cart