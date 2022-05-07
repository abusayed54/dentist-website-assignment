import React from 'react';
import { MainLayout } from '../styles/Layout';
import styled from "styled-components";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const Counter = () => {
    return (
        <CounterStyled>
            <MainLayout>
                <div className="counter-container">
                    <div className="happy-patient counter-flex">
                        <AccessibilityNewIcon />
                        <h1>1,240 +</h1>
                        <h2>Happy Patient</h2>
                    </div>
                    <div className="our-services counter-flex">
                        <MedicalServicesIcon />
                        <h1>640 +</h1>
                        <h2>Our Services</h2>
                    </div>
                    <div className="our-doctors counter-flex">
                        <AccountCircleIcon />
                        <h1>240 +</h1>
                        <h2>Our Doctors</h2>
                    </div>
                    <div className="service-points counter-flex">
                        <MiscellaneousServicesIcon />
                        <h1>24 +</h1>
                        <h2>Service Points</h2>
                    </div>
                </div>
            </MainLayout>
        </CounterStyled>
    );
};

const CounterStyled = styled.section`

background: linear-gradient(rgba(17, 150, 204,0.8), rgba(17, 150, 204,0.8)), url(./images/banner1.jpg) no-repeat;
background-size: cover;
min-height: 45vh;
margin: 9rem 0rem;
display: flex;
justify-content: center;
align-items: center;

.counter-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: var(--white-color);
    h1{
        font-weight: 700;
    }
    h2{
        font-size: 1.5rem;
    }
    .counter-flex{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg{
            font-size: 3rem;
        }
    }
}
   @media screen and (max-width: 991px) {
    .counter-container{
        flex-direction: column;
        .counter-flex{
            &:not(:last-child){
                margin-bottom: 3rem;
            }
        }
    }
   } 
`

export default Counter;