
import React from 'react'
import { OffersCardContainer } from './styles'
import { elsie } from '@/app/fonts'
import ICard from './props'

function OffersCard({ img, title}:ICard) {
  return (
    <OffersCardContainer>
        <img src={img} alt=""/>
        <div>
            <h1 className={elsie.className}>{title}</h1>
            <p>R$ 20,00</p>
            <button>
              Comprar
              <img src="./imgs/seta.png" alt="seta"/>
            </button>
        </div>
    </OffersCardContainer>
  )
}

export default OffersCard