import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layout';
import ButtonAnimate from './ButtonAnimate';
import ButtonSecondary from './ButtonSecondary';

const Options = () => {
    return (
        <MainLayout>
            <OptionStyled>
                <div className="top-doctors">
                    <div className="title-of-topDoctor">
                        <h3>Top Doctors</h3>
                        <p>CARE SOLUTIONS</p>
                    </div>
                    <p className='common-para'>
                        Get The Quality Deserve Management Personal Assistance Housekeeping Nutritional Management Medication Assistance Care That You
                    </p>
                    <div className="button">
                        <ButtonSecondary title="About Us" />
                    </div>

                </div>
                <div className="opening-hours">
                    <div className="title-of-topDoctor">
                        <h3>Opening Hours</h3>
                    </div>
                    <div className='opening-time-container'>
                        <div className="flex">
                            <p>Monday</p>
                            <small>8:00am - 12pm</small>
                        </div>
                        <div className="flex">
                            <p>Tues - Thur</p>
                            <small>8:00am - 4:30pm</small>
                        </div>
                        <div className="flex">
                            <p>Friday</p>
                            <small>8:00am - 3:00pm</small>
                        </div>
                    </div>
                    <div className="button">
                        <ButtonSecondary title="Request Appointment" />
                    </div>
                </div>
                <div className="service-time">
                    <div className="title-of-topDoctor">
                        <h3>24 HOUR SERVICE</h3>
                        <p>DEFINED BY YOU</p>
                    </div>
                    <p className='common-para'>
                        Get The Quality Deserve Management Personal Assistance Housekeeping Nutritional Management Medication Assistance Care That You
                    </p>
                    <div className="button">
                        <ButtonSecondary title="Learn More" />
                    </div>
                </div>
                <div className="book-visit">
                    <div className="title-of-topDoctor">
                        <h3>BOOKING A VISIT</h3>
                        <p>CLOSE TO HOME</p>
                    </div>
                    <h2>(252) 332-7955</h2>
                    <p className='common-para'>
                        Get The Quality Care That You Deserve Immediately
                    </p>
                    <div className="button">
                        <ButtonSecondary title="Contact Us" />
                    </div>
                </div>
            </OptionStyled>
        </MainLayout>
    );
};

const OptionStyled = styled.div`
    width: 100%;
    height: 200px;
    transform: translateY(-20px);
    transition: 0.3s ease transform;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    min-height: 18rem;
        height: auto;
        color: var(--white-color);
        .common-para{
            font-size: 0.9rem;
        };
        .title-of-topDoctor{
            h3{
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--white-color);
            text-transform: uppercase;
        };
            p{
                font-size: 0.857rem;
            }
        }
    .top-doctors{
        background-color: var(--primary-color);
        min-height: inherit;
        padding: 30px;
    };
    .opening-hours{
        background-color: var(--secondary-hover-color);
        min-height: inherit;
        padding: 30px;
        .opening-time-container{
            margin-top: 2.5rem;
            .flex{
                border-bottom: 1px solid var(--white-color);
                display: flex;
                justify-content: space-between;
                p,small{
                    font-size: 0.875rem;
                    margin-bottom: 5px;
                    padding: 5px 1px;
                }
            }
        }
    };
    .service-time{
        background-color: var(--primary-color);
        min-height: inherit;
        padding: 30px;
    };
    .book-visit{
        background-color: var(--secondary-hover-color);
        min-height: inherit;
        padding: 30px;
    };
    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(1,1fr);
    }
`

export default Options;