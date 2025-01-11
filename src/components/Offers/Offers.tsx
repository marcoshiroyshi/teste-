import React from 'react'
import { OffersContainer, OffersText, OffersWrap } from './styles'
import OffersCard from '../OffersCard/OffersCard'
import { elsie } from '@/app/fonts'
import ICard from '../OffersCard/props'


const PlantData = [
   {
       img: '',
       title: '',
   }
]

function Offers() {
  return (
    <OffersContainer>
        <OffersText>
            <p>Conheça nossas</p>
            <h1 className={elsie.className}>Ofertas</h1>
        </OffersText>
        <OffersWrap>
            <OffersCard img='' title= ''/>
        </OffersWrap>
    </OffersContainer>
  )
}

export default Offers