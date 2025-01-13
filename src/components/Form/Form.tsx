import React, { useState } from 'react'
import { FormContainer } from './styles'

function Form() {
  const [email, setEmail] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    
  }

  const handleClick = () => {
    if (email === '') {      
      console.log("Insira um e-mail válido")
    } 
    
  }

  return (
    <FormContainer>
			<input 
      type="email"
      value={email}
      onChange={handleInputChange}
      placeholder="Your E-Mail Address" />
			<button 
      type="button"
      onClick={handleClick}
      >Send</button>
		</FormContainer>
  )
}

export default Form