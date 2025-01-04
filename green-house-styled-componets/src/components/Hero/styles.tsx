'use client'

import styled from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    height: 100vh;
    border: 1px solid black;

    @media (min-width: 1280px) {
        background-image: url('../../imgs/yellow.jpg');
        background-repeat: no-repeat;
        background-position: top right;
    }
`