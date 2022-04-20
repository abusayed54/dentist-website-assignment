import React from 'react';
import styled from 'styled-components';

const ButtonPrimary = ({ text }) => {
    return (
        <ButtonPrimaryStyled>
            {text}
        </ButtonPrimaryStyled>
    );
};
const ButtonPrimaryStyled = styled.button`
    font-size:16px;
    padding: 0.7rem 1.7rem;
    letter-spacing: 1px;
    outline: none;
    border: none;
    background-color: var(--primary-hover-color);
    color: var(--white-color);
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background-color: var(--secondary-hover-color);
    }
`
export default ButtonPrimary;