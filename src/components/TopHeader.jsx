import React from 'react';
import styled from 'styled-components'
import { MainLayout } from '../styles/Layout';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import MapIcon from '@mui/icons-material/Map';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ButtonPrimary from './ButtonPrimary';

const TopHeader = () => {
    return (
        <TopHeaderStyled>
            <MainLayout>
                <div className="top-header-wrapper">
                    <div className="header-wrapper">
                        <div className="left-content">
                            <ul className='left-content-flex'>
                                <li>
                                    <div className="tel flex">
                                        <div className="icon">
                                            <LocalPhoneIcon />
                                        </div>
                                        <p>Tel:+8801792230738</p>
                                    </div>
                                </li>
                                <li> <div className="email flex">
                                    <div className="icon">
                                        <EmailIcon />
                                    </div>
                                    <p>abusayed444460@gmail.com</p>
                                </div></li>
                                <li><div className="address flex">
                                    <div className="icon">
                                        <MapIcon />
                                    </div>
                                    <p>Mohadevpur, Naogaon</p>
                                </div></li>
                            </ul>
                        </div>
                        <div className="right-content">
                            <div className="icon-section">
                                <div className="facebook icons">
                                    <FacebookIcon />
                                </div>
                                <div className="twitter icons">
                                    <TwitterIcon />
                                </div>
                                <div className="youtube icons">
                                    <YouTubeIcon />
                                </div>
                            </div>
                            <div className="btn-section"><ButtonPrimary text={"Make Appointment"} /></div>
                        </div>
                    </div>
                    {/* <div className="left-content-wrapper">
                        <div className="tel flex">
                            <div className="icon">
                                <LocalPhoneIcon />
                            </div>
                            <p>Tel:+8801792230738</p>
                        </div>
                        <div className="email flex">
                            <div className="icon">
                                <EmailIcon />
                            </div>
                            <p>abusayed444460@gmail.com</p>
                        </div>
                        <div className="address flex">
                            <div className="icon">
                                <MapIcon />
                            </div>
                            <p>Mohadevpur, Naogaon</p>
                        </div>
                    </div> */}
                    {/* <div className="right-content-wrapper">
                        <div className="icon-section">
                            <div className="facebook icons">
                                <FacebookIcon />
                            </div>
                            <div className="twitter icons">
                                <TwitterIcon />
                            </div>
                            <div className="youtube icons">
                                <YouTubeIcon />
                            </div>
                        </div>
                        <div className="btn-section">
                            <ButtonPrimary text={"Make Appointment"} />
                        </div>
                    </div> */}
                </div>
            </MainLayout>
        </TopHeaderStyled>
    );
};
const TopHeaderStyled = styled.div`
 background-color: var(--primary-color);
    width: 100%;
    .header-wrapper{
        display: grid;
        grid-template-columns: auto auto auto;
        
        .left-content{
            
            grid-column: 1 \ span 2;
            padding: 0px 15px;
            padding-right: 100px;
            .left-content-flex{
                display: flex;
                .flex{
                    display: flex;
                    .icon{
                        margin-right: 8px;
                        &:last-child{
                            margin-right: 0px;
                        }
                    }
                }
            }
        ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
        }
    }
    .right-content{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .icon-section{
            display: flex;
            justify-content: space-between;
            color: var(--white-color);   
            cursor: pointer;
            .icons{
                margin-right: 15px;
            }
            }
        }
    }
    }
   @media screen and (max-width: 1140px){
    .header-wrapper{
        display: block;
        text-align: center;
        .left-content{
            margin: auto;
            width: 90%;
            padding-right: 0px;
        }
        .right-content{
            margin-top: 1rem;
        }
    }
   }
   @media screen and (max-width: 770px){
    .header-wrapper{
        display: block;
        text-align: center;
        .left-content{
            margin: auto;
            width: 90%;
            .left-content-flex{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: auto;
            }
        }
        .right-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 1rem;
        }
    }
   }
   @media screen and (max-width: 375px){
    .header-wrapper{
        display: block;
        text-align: center;
        .left-content{
            display: block;
            margin: auto;
            width: 90%;
        }
    }
   }

   
`;
export default TopHeader;