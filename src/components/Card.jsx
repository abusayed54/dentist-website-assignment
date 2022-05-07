import React from 'react';
import styled from 'styled-components'
import ButtonAnimate from './ButtonAnimate';

const Card = ({ title, description, image }) => {
    return (
        <CardStyled>
            <div className="card-wrapper">
                <div className="flip-inner-wrapper">
                    <div className="flip-front">
                        <img src={image} alt="" />

                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="flip-back">
                        <ButtonAnimate title="Take Appointment" />
                    </div>
                </div>
            </div>
        </CardStyled>
    );
};
const CardStyled = styled.div`
display: flex;
justify-content: center;
    .card-wrapper{
        /* width: 350px; */
        width: 100%;
        height: 400px;
        perspective: 1000px;
        border-radius: 10px;
        overflow: hidden;
        text-align: left;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 15px;
        &:hover .flip-inner-wrapper{
            transform: rotateY(180deg);
            cursor: pointer;
        }
        .flip-inner-wrapper{
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.4s;
            color: var(--secondary-hover-color);
            text-align: center;
            .flip-front{
                img{
                    width: 100%;
                    object-fit: cover;
                    height: 200px;
                    border-radius: 10px;
                }
                h2{
                    padding: 10px 0;
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                p{
                    color: var(--p-color);
                    font-size: .857rem;
                    padding: 0 20px;
                }
            };
            .flip-back{
                width:320px;
                height: 380px;
                background-color: transparent;
                text-align: center;
                transform: rotateY(180deg);
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .flip-front,
            .flip-back{
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: 10px;
            }
        }
    }
`
export default Card;