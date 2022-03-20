import React from 'react'
import { Container } from './UploadRecipe.style'
import Navbar from '../../components/Navbar/NavUser'
import { FooterContainer } from '../../components/Footer/FooterContainer'

function UploadRecipe() {
  return (
    <Container>
      <Navbar />
      <FooterContainer />
    </Container>    
  )
}

export default UploadRecipe