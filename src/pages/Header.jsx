import React from 'react';
import styled from 'styled-components'
import ButtonPrimary from '../components/ButtonPrimary';
import MainHeader from '../components/MainHeader';
import TopHeader from '../components/TopHeader';
import { MainLayout } from '../styles/Layout';

const Header = () => {

    return (
        <HeaderStyled>
            <TopHeader />
            <MainHeader />
        </HeaderStyled>
    );
};

const HeaderStyled = styled.div`
   
`;
export default Header;