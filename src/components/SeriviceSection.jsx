import React from 'react';
import { MainLayout } from '../styles/Layout';
import styled from 'styled-components'
import Card from './Card';
import useServices from "../hooks/useServices"

const SeriviceSection = () => {
    const [services] = useServices();
    return (
        <MainLayout>
            <ServiceSectionStyled>
                <div className="headings">

                </div>
                <div className="service-card">
                    {services.map(service => <Card
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                    />)}
                </div>
            </ServiceSectionStyled>

        </MainLayout>
    );
};
const ServiceSectionStyled = styled.section`
    .headings{
        text-align: center;
        padding: 5rem 0rem 2rem 0rem;
        margin:0px 0px 25px 0px;
        &::after{
            content: "Services";
            font-size: 3rem;
            width: 280px;
            height: 100px;
            /* background: linear-gradient(to right, var(--primary-color) , var(--secondary-hover-color)); */
            padding: .75rem 1.5rem;
            font-weight: 600;
            color:var(--nav-text-color);
            border-radius: 7px ;
        }
        
    };
    .service-card{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 1.8rem;
            grid-column-gap: 2rem;
        }
        @media screen and (max-width: 991px) {
            .service-card{
                grid-template-columns: repeat(2, 1fr);
                align-items: center;
            }
        }
        @media screen and (max-width: 688px) {
            .service-card{
                grid-template-columns: repeat(1, 1fr);
                align-items: center;
            }
        }
`
export default SeriviceSection;