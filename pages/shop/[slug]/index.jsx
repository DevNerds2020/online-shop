import React from 'react'
import { useRouter } from 'next/router'
import Image from '../../../components/StyledTags/Image/Image'
import H1 from '../../../components/Typography/H1/H1'
import P from '../../../components/Typography/P/P'
import Layout from '../../../components/Layout/Layout'
const shopItem = () => {
  const router = useRouter()
  const query = router.query
  const { name, price, image } = query
  return (
    <Layout>
      <div>
        <H1>{name}</H1>
        <P>price: {price}</P>
      </div>
      <Image src={image} alt={name} />
    </Layout>
  )
}

export default shopItem