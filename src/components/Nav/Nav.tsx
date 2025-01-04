'use client'

import { Button, List, ListDesktop, NavContainer } from './styles'
import { useState } from 'react'

function Nav() {
    const [isOpen, setIsOpen] = useState(true)
    
        function handleClick() {
            setIsOpen(!isOpen)
        }


  return (
    <NavContainer>
        <img src="./imgs/logo.jpg" alt="" />
        <Button onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </Button>
            {isOpen && (
                <List>
                    <li>Como fazer /</li>
                    <li>Ofertas</li>
                    <li>Depoimentos</li>
                    <li>Vídeos</li>
                    <li>Meu carrinho</li>
                </List>
            )}
            <ListDesktop>
                <li>Como fazer</li>
                <li>Ofertas</li>
                <li>Depoimentos</li>
                <li>Vídeos</li>
                <li>Meu carrinho</li>
            </ListDesktop>
    </NavContainer>
  )
}

export default Nav