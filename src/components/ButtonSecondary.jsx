import React from 'react';
import styled from 'styled-components'
const ButtonSecondary = ({ title }) => {
    return (
        <ButtonSecondaryStyled>
            {title}
        </ButtonSecondaryStyled>
    );
};

const ButtonSecondaryStyled = styled.button`
margin-top: 10px;
    background-color: transparent;
    color: var(--white-color);
    padding: 0.55rem 1.2rem;
    border-radius: 3rem;
    outline: none;
    font-size: 0.9rem;
    letter-spacing: .05rem;
    border: 3px solid var(--white-color);
    box-shadow: 0 7px 20px rgb(170 170 170 / 20%);
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: var(--white-color);
        color: black;
    }
    
`

export default ButtonSecondary;