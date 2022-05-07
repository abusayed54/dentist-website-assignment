import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { MainLayout } from '../styles/Layout';

const Footer = () => {
    return (

        <FooterStyled>
            <MainLayout>
                <div className="footer-wrapper">
                    <div className="about">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor ut labore.</p>
                    </div>
                    <div className="explore">
                        <h3>Explore</h3>
                        <div className="explore-content">
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">About Us</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Services</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Press & Blog</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Pricing</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Faq</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Company</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Our Projects</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Help</a>
                            </div>
                            <div className="item">
                                <ArrowForwardIosOutlinedIcon />
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news">
                        <h3>Latest News</h3>
                        <div className="latest-news-content">
                            <div className="section-content">
                                <img src="./images/img1.jpg" alt="" />
                                <div className="section-inner-content">
                                    <span>Jan 16, 2021</span>
                                    <p>We’re Providing the Quality Care</p>
                                </div>
                            </div>
                            <div className="section-content">
                                <img src="./images/img2.jpg" alt="" />
                                <div className="section-inner-content">
                                    <span>Jan 16, 2021</span>
                                    <p>Success is Through the Roofing Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact">
                        <h3>Contact</h3>
                        <div className="contact-item">
                            <LocationOnOutlinedIcon />
                            <p>Mohadevpur, Naogaon, Rajshahi</p>
                        </div>
                        <div className="contact-item">
                            <EmailIcon />
                            <p>abusayed444460@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <LocalPhoneIcon />
                            <p>Tel : +880 17 92 23 07 38</p>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <span>&copy; Copyright 2022 By Abu Sayeed</span>
                </div>
            </MainLayout>
        </FooterStyled>

    );
};

const FooterStyled = styled.footer`
margin-top: 8rem;
background-color: var(--secondary-hover-rgb);
padding: 8rem 0rem 2rem 0rem;
    .footer-wrapper{
        border-bottom: 1px solid var(--p-color);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        padding: 0 1.4rem;
        h3{
            color: var(--white-color);
            margin-bottom: 2rem;
            font-size: 1.4rem;
        }
        a,p,svg{color:var(--footer-p-color); font-size:0.9rem}


        .about{
            p{}
        }
        .explore{
            .explore-content{
                .item{
                    svg{}
                    a{}
                }
            }
        }
        .latest-news{
            .latest-news-content{
                .section-content{
                    img{width: 100px}
                    .section-inner-content{
                        span{color:var(--p-color); font-size: 14px}
                        p{}
                    }
                }
            }
        }
        .contact{
            .contact-item{
                svg{}
                p{}
            }
        }
    }
    .copy-right{color:var(--p-color); font-size: 0.9rem; text-align: center}

    @media screen and (max-width: 991px){
        .footer-wrapper{
            grid-template-columns: repeat(1, 1fr);
        }
    }
`
export default Footer;