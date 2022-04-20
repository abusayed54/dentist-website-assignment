import React from 'react';
import styled from 'styled-components';

const ButtonAnimate = ({ title }) => {
    return (
        <ButtonAnimateStyled>
            {title}
        </ButtonAnimateStyled>
    );
};
const ButtonAnimateStyled = styled.button`
        border: none;
        padding: 14px 22px;
        background-color: var(--primary-color);
        letter-spacing: 1px;
        border-radius: 3rem;
        transition: ease-out 0.3s;
        cursor: pointer;
        color: var(--white-color);
        font-size: 1rem;
        box-shadow: inset 0 0 0 0 black;
        outline: none;
        position: relative;
        z-index: 1;
        overflow: hidden;
        &::before{
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: var(--secondary-hover-color);
            z-index: -1;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease-out;
            
        }
        &:hover,&:focus{
            &::before{
                transform: scaleX(1);
               
            }
        }
`
export default ButtonAnimate;