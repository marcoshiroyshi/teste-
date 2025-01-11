

import React from 'react'
import { HeroContainer, HeroContent } from './styles'
import Nav from '../Nav/Nav'
import { elsie } from '@/app/fonts'
import Form from '../Form/Form'


function Hero() {
  return (
    <HeroContainer>
      <Nav/>  
      <HeroContent>
        <div>
          <span>Sua casa com as</span>
          <h1 className={elsie.className}>melhores plantas</h1>
          <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
          <Form/>
        </div>
        <img src="./imgs/img-hero.png" alt=""/>
      </HeroContent>         
    </HeroContainer>
  )
}

export default Hero