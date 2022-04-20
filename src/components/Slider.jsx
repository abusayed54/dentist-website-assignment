import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const Slider = () => {
    return (
        <SliderStyled className="slider-container">
            <div className="carosel-container">
                <Carousel>
                    <Carousel.Item interval={2500}>
                        <img
                            className="d-block w-100"
                            src="/images/img1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="carosel-title-wrapper">
                                <div className="carosel-title">
                                    <h3 className='welcome-title'>Welcome To Dental Pro</h3>
                                    <h1 className='title'>We Have Qualified <span>Dental</span> Expert</h1>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src="/images/img2.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <div className="carosel-title2">
                                <h1>Teeth Scalling</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/images/img3.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <div className="carosel-title3">
                                <h1>Root Canel</h1>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </SliderStyled>
    );
};

const SliderStyled = styled.div`
    width: 100%;
    .carosel-container{
        background: rgba(0,0,0,1);
        position: relative;
        img{
            height: 500px;
        }
        .carosel-title-wrapper{
            .carosel-title{
                h3{
                    font-size: 45px;
                    font-weight: 600;
                    color: var(--secondary-hover-color);
                }
                h1{
                    font-size: 55px;
                    text-transform: uppercase;
                    font-weight: bold;
                    span{
                        color: var(--primary-color);
                    }
                }
            }
        }
        .carosel-title2{
            color:var(--nav-text-color);
            h1{
                font-weight: 600;
            }
            
        }
        .carosel-title3{
            color:var(--nav-text-color);
            h1{
                font-weight: 600;
            }
        }
    }

    @media screen and (max-width: 991px) {
        .carosel-title-wrapper{
            .carosel-title{
                .welcome-title{
                    display: none;
                }
                .title{
                        color: var(--nav-text-color);
                }
            }
        }
    }

`
export default Slider;