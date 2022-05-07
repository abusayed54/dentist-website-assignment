import React from 'react';
import styled from 'styled-components'
import ButtonPrimary from '../components/ButtonPrimary';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Registration = () => {
    return (
        <RegistrationStyled>
            <div className="total-wrapper">
                <div className="registration-wrapper">
                    <h2>Please Register</h2>
                    <div className="input-fiels">
                        <input type="email" placeholder='Enter Your Email' />
                        <input type="password" placeholder='Enter Your Password' />
                        <div className="button">
                            <ButtonPrimary text="Sign Up" />
                        </div>

                        <div className="otherwise">
                            <h4>Or</h4>
                        </div>
                        <div className="sign-up-method">
                            <div className="google-sign-up">
                                <button> <GoogleIcon /> Sign up</button>
                            </div>
                            <div className="github-sign-up">
                                <button> <GitHubIcon /> Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RegistrationStyled>
    );
};

const RegistrationStyled = styled.div`
margin-top: 1.8rem;
    .total-wrapper{
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .registration-wrapper{
            width: 40%;
            h2{
                font-weight: 600;
                text-align: center;
            }
        .input-fiels{
            display: flex;
            flex-direction: column;
            input{
                margin: .89rem 0rem;
                padding: 0.5rem 0.3rem;
                outline: none;
                border: .5px solid var(--primary-color);
                border-radius: 4px;
                font-weight: 600;
            }
            .button{text-align: center}
            .otherwise{
                margin-top: 25px;
                position: relative;
                h4{
                    text-align: center;
                    &::before{
                    content: "";
                    display: block;
                    width: 250px;
                    height: 1px;
                    background: var(--secondary-hover-color);
                    position: absolute;
                    left:0;
                    top:40%;
                }
                &::after{
                    content: "";
                    display: block;
                    width: 250px;
                    height: 1px;
                    background: var(--secondary-hover-color);
                    position: absolute;
                    right:0;
                    top:40%;
                }
                }
            }
            .sign-up-method{
                display: flex;
                justify-content: space-between;
                
                button{
                    width: 100%;
                    font-size: 1.5rem;
                    padding: 0rem 3rem;
                    outline: none;
                    border: none;
                    color: var(--primary-color);
                    font-weight: 600;
                    svg{
                        font-size: 1.7rem;
                    }
                }
            }
        }
    }
    }
    @media screen and (max-width:991px){
        .total-wrapper{
            .registration-wrapper{
                width:90%;
                .input-fiels{
                    .otherwise{
                        h4{
                            &::before, &::after{
                                display: none;
                            }
                        }
                    }
                }
                .sign-up-method{
                    flex-direction: column;
                    button{
                        &:first-child {
                            margin-bottom: 20px;
                            }
                    }
                }
            }
        }
    }
`
export default Registration;