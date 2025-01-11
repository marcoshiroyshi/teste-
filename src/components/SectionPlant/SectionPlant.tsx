
import { elsie } from '@/app/fonts'
import React from 'react'
import { ContainerSectionPlant, ContainerText, ContentSectionPlant } from './styles'

function SectionPlant() {
  return (
    <ContainerSectionPlant>
        <img src="./imgs/planta-3.png" alt=""/>
        <ContentSectionPlant>
            <span>Como conseguir</span>
            <h1 className={elsie.className}>minha planta</h1>
            <ContainerText>
                <div>
                    <span></span>
                    <p>Escolha suas plantas</p>
                </div>
                <div>
                    <span></span>
                    <p>Faça seu pedido</p>
                </div>
                <div>
                    <span></span>
                    <p>Aguarde na sua casa</p>
                </div>
            </ContainerText>
        </ContentSectionPlant>
    </ContainerSectionPlant>
  )
}

export default SectionPlant