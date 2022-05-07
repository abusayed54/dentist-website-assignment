import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layout';
import ButtonPrimary from './ButtonPrimary';

const DoctorsCard = ({ name, image, type }) => {
    return (
        <DoctorsCardstyled>
            <div className="doctors-card-wrapper">
                <div className="doctor-image">
                    <img src={image} alt="" />
                </div>
                <div className="text-content">
                    <h2>{name}</h2>
                    <h3>{type}</h3>
                </div>
                <div className="doctors-button">
                    <ButtonPrimary text="Book Appointment" />
                </div>
            </div>
        </DoctorsCardstyled>
    );
};
const DoctorsCardstyled = styled.div`
margin: 10px 20px;
    width: 100%;
    height: auto;
    .doctors-card-wrapper{  
        .doctor-image{
            img{
                width: 100%;
                height: 350px;
            }
        }
        .text-content{
            margin-top: 20px;
            text-align: center;
            color: var(--nav-text-color);
            h2{
                font-size: 1.25rem;
                font-weight: 600;
            }
            h3{
                font-size: .875rem;
                color: var(--primary-color);
                font-weight: 600;
            }
        }
        .doctors-button{
            margin-top: 15px;
            text-align: center;
        }
    }
`
export default DoctorsCard;