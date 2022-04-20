import styled from 'styled-components'

export const MainLayout = styled.div`
    width: calc(100vw - 8rem);
    margin: 0 auto;
    transition: 0.3s ease width;
    @media screen and (max-width:1140px){
        width: calc(100vw - 2rem);
    }
`