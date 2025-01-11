'use client'

import styled from 'styled-components'

export const OffersCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 550px;

  h1 {
    font-size: 3rem;
  }

  button {
    background-color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #ffe297;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }

`