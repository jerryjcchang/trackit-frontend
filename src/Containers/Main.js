import React from 'react'
import PackageForm from '../Components/PackageForm'
import { Container, Image } from 'semantic-ui-react'

const FormContainer = () => {
  return(
    <Container id="form-container">
      <Image src="https://i.imgur.com/mnkKglx.png" size="medium" centered/>
      <PackageForm />
    </Container>
  )
}

export default FormContainer
