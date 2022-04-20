import React from 'react';
import styled from 'styled-components'
import { MainLayout } from '../styles/Layout';
import ButtonAnimate from './ButtonAnimate';
// import img from "../../public/images/img4.jpg"

const TeethCare = () => {
    return (
        <MainLayout>
            <TeethCareStyled>
                <div className="teethCare-container">
                    <div className="img-section">
                        <img src="/images/img4.jpg" alt="" />
                    </div>
                    <div className="teethCare-content">
                        <h1>We Care <span>About Your</span> Teeth</h1>
                        <p>We sincerely believe that visiting a dentist shouldn’t be a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and adult customers visiting a dentist ! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit laudantium quibusdam ad earum architecto. </p>
                        <div className="button-anim">
                            <ButtonAnimate title="Make Appointment Now" />
                        </div>
                    </div>

                </div>
            </TeethCareStyled>
        </MainLayout>
    );
};

const TeethCareStyled = styled.section`
margin-top: 5rem;
    .teethCare-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img-section{
           /* min-height: 100px; */
           width:180%;
            img{
                /* min-height: 100%; */
                width: 100%;
            }
        }
        .teethCare-content{
            padding: 0 1rem;
            h1{
                font-size: 38px;
                font-weight: 600;
                margin-bottom: 2rem;
                span{
                    color: var(--primary-color);
                }
            }
            p{
                line-height: 30px;
                font-size: 20px;
                color:var(--p-color)
            }
            .button-anim{
                margin-top: 4rem;
            }
        }
    }
    @media screen and (max-width: 991px) {
        .teethCare-container{
            flex-direction: column;
            .img-section{
                width: 95%;
                margin: 0 auto;
                img{}
            }
        }
    }
`
export default TeethCare;