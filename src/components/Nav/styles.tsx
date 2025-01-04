'use client'

import styled from 'styled-components'

export const NavContainer = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
    position: absolute;
    border: 1px solid black;
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
        display: block;
        width: 90%;
        height: 100px;
        list-style: none;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`