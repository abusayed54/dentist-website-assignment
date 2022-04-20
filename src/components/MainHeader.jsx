import React, { useState } from 'react';
import styled from 'styled-components'
import { MainLayout } from '../styles/Layout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


const TestComponent = () => {
    const [menuShow, setMenuShow] = useState(false)


    const handleMenu = () => {
        setMenuShow((p) => !p)
    }
    //css condition
    let isMenuShow = menuShow ? "menu-transform" : "";
    return (
        <MainHeaderStyled>
            <MainLayout>
                <div className="main-header-container">
                    <div className='left-content'>
                        <div className="logo">
                            <img src="/logo.png" alt="" />
                        </div>
                        <div className="left-content-title">
                            <h1>DENTAL <span>PRO</span> </h1>
                            <small>AJ Dental Solution</small>
                        </div>
                    </div>

                    <div className="right-content-wrapper">
                        <div className={`right-content ${isMenuShow}`}>
                            <nav className='nav-bar'>
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/features">Features</Link>
                                    </li>
                                    <li>
                                        <Link to="/aboutUs">About US</Link>
                                    </li>
                                </ul>

                            </nav>
                            <div className="user-option">
                                <ul>
                                    <li><Link to="/register">Registration</Link></li>
                                    <li><Link to="/login">Log In</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hamburger-menu">
                            {!menuShow ? <MenuIcon onClick={handleMenu} /> : <CloseIcon onClick={handleMenu} className="closeIcon" />}
                        </div>
                    </div>
                </div>

            </MainLayout>
        </MainHeaderStyled>
    );
};

const MainHeaderStyled = styled.div`
background-color: var(--white-color);
box-shadow: 0 4px 2px -2px gray;
.main-header-container{
    display: flex;
    justify-content: space-between;
    .left-content{
        display: flex;
        align-items: center;
        /* justify-content: center; */
        h1{
            span{
                color:var(--primary-color)
            }
        }
        .left-content-title{
            h1{
                font-weight: 700;
                margin-bottom: 0;
            }
        }
    }
    .right-content-wrapper{
        padding-top: 10px;
        width: 60%;
        .right-content{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        nav{
            display: flex;
            justify-content: space-between;
            /* padding-top: 20px; */
            ul{
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                li{
                
                    transition: 0.3s ease all;
                    a{
                        padding: 10px 20px;
                        color: var(--nav-text-color);
                        font-size: 19px;
                        border-radius: 30px;
                        transition: 0.3s ease-in-out;
                        font-weight: 600;
                        &:hover{
                        background-color: var(--secondary-hover-color);
                        
                        color: var(--white-color)
                    }
                    }
                   
                   
                }
            }
        }
        .user-option{
            ul{
                list-style: none;
                display: flex;
                justify-content: space-between;
                /* padding-top: 10px; */
               li{
                   padding: 10px 20px;
                   a{
                       color: var(--primary-color);
                       &:hover{
                           color: var(--secondary-hover-color);
                       }
                   }
               }
            }
        }     
    }
    .hamburger-menu{
            display: none;
            
            svg{
                font-size: 45px;  
                }
        }
    }   
}

@media screen and (max-width: 991px) {
    .main-header-container{
        .left-content{
.left-content-title{
    h1{
        font-size: 19px;
    }
}
        }
        .right-content-wrapper{
            display: flex;
            justify-content: flex-end;
            z-index: 500;
            .right-content{
                position: absolute;
                height: 100vh;
                top:0;
                left: 0;
                transform: translate(-100%);
                transition: 0.3s ease transform;
            background-color: var(--secondary-hover-color);
            flex-direction: column;
            justify-content: space-evenly;
            nav{
                ul{
                    flex-direction: column;
                    li{
                        padding: 20px;
                        
                       a{
                        color: white;
                        font-size: 25px;
                       }
                    }
                }
            }
            .user-option{
                margin-top: 10px;
                ul{
                    flex-direction: column;
                    line-height: 5px;
                    li{
                        padding: 15px 0;
                        a{
                            font-size: 20px;
                        }
                    }
                }
            }
        }
        .hamburger-menu{
                display: block;
                position: relative;
                color: var(--primary-color);
                z-index: 100;
                
            }
            .menu-transform{
                transform: translate(0);
            }
        }
    }
}
    

`
export default TestComponent;