import React from 'react'

import Footer from '../components/General/Footer/Footer'
import Header from '../components/General/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
