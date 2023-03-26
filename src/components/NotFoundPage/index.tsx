import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Layout } from '../global/Layout'
import * as Styled from './styled'

export const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Styled.Title>Not found Page</Styled.Title>
    </Layout>
  )
}
