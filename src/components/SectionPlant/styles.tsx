'use client'

import styled from 'styled-components'

export const ContainerSectionPlant = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (min-width: 1240px) {
        flex-direction: row;
        width: 70%;

    }
`

export const ContentSectionPlant = styled.div`

    padding: 50px;

    @media (min-width: 1240px) {


    }


`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;

    div {
        display: flex;
        align-items: center;
        gap: 10px;
        
        span {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ffcb47;
        }
    }


    @media (min-width: 1240px) {


    }
`