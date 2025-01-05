'use client'

import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    height: 100vh;

    @media (min-width: 1280px) {
        background-image: url('../../imgs/yellow.jpg');
        background-repeat: no-repeat;
        background-position: top right;
        padding: 0 150px;
    }
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 9px;
        text-align: center;
        margin: 0 auto;
        width: 70%;
    }

    img {
        display: none;
    }


    @media(min-width: 1280px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            border: 1px solid red;
            margin-top: 0;

            div {
                text-align: left;
                width: 30%;
                border: 1px solid blue;
                margin-left: 2rem;
                margin-top: -6rem;

                h1 {
                    width: 20%;
                }

                p {
                    margin-top: 2rem;
                }
            }


            img {
                display: block;
                height: 30%;
                width: 40%;
                border: 1px solid blue;
                margin-right: 20rem;
            }


        }
    

`