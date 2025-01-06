import React from 'react'
import { FormContainer } from './styles'

function Form() {
  return (
    <FormContainer>
			<input type="email" placeholder="Your E-Mail Address" />
			<button type="button">Send</button>
		</FormContainer>
  )
}

export default Form