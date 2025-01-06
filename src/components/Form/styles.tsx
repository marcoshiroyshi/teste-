'use client'

import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2rem;
  width: 300px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);


  input {
	background: #fff;
	border: 0;
	outline: 0;
	
  }

  button {
    width: 40%;
    height: 2.5rem;
    display: inline-block;
	background: #ffcb47;
	color: #fff;
	font: inherit;
	border: 0;
	outline: 0;
	padding: 0;
	transition: all 200ms ease-in;
	cursor: pointer;
  }

  @media(min-width: 1248px) {
    margin-left: 0;
  }

`