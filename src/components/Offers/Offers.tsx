import React from 'react'
import { OffersContainer, OffersText, OffersWrap } from './styles'
import OffersCard from '../OffersCard/OffersCard'
import { elsie } from '@/app/fonts'
import ICard from '../OffersCard/props'


const plantData = [
   {
        id: 1,
       img: './imgs/planta1.png',
       title: 'Ajuga reptans',
   },
   {
    id: 2,
       img: './imgs/planta2.png',
       title: 'Cordyline fruticosa',
   },
   {
    id: 3,
       img: './imgs/planta3.png',
       title: 'Crassula ovata',
   },
   {
    id: 4,
       img: './imgs/planta4.png',
       title: 'Cyperus rotundus',
   },
   {
    id: 5,
       img: './imgs/planta5.png',
       title: 'Delairea odorata',
   },
   {
    id: 6,
       img: './imgs/planta6.png',
       title: 'Datura metel',
   },
]

function Offers() {
  return (
    <OffersContainer>
        <OffersText>
            <p>Conheça nossas</p>
            <h1 className={elsie.className}>Ofertas</h1>
        </OffersText>
        <OffersWrap>
            {plantData.map(item => (
                <OffersCard key={item.id} img={item.img} title={item.title}/>
            ))}            
        </OffersWrap>
    </OffersContainer>
  )
}

export default Offers