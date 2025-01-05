'use client'

import styled from 'styled-components'

export const NavContainer = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    @media (min-width: 1024px) {
        
        
    }

`
export const Button = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-direction: column;
    border: none;
    background-color: white;
    cursor: pointer;

    div {
        width: 25px;
        height: 3px;
        background-color: black;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`
export const List = styled.ul`
    font-family: "Montserrat", serif;
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    width: 90%;
    height: 100px;
    list-style: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 90px;

    @media (min-width: 1024px){
        display: none;
    }
`

export const ListDesktop = styled.ul`
    display: none;
    
    @media (min-width: 1024px){
        font-family: "Montserrat", serif;
        font-size: 1rem;
        font-weight: 500;
        display: block;
        width: 50%;
        height: 100px;
        list-style: none;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

    }
`