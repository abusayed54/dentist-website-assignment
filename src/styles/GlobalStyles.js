import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #1196CC;
    --primary-color-rgb: 17, 150, 204;
    --primary-hover-color: #202c45;
    --primary-hover-rgb: 32, 44, 69;
    --secondary-hover-color: #102147;
    --secondary-hover-rgb: rgb(16, 33, 71);
    --orange-color: #fc6a20;
    --orange-color-rgb: 252, 106, 32;
    --white-color: #fff;
    --gray-color: #808080;
    --nav-text-color:#222;
    --p-color: #777;
    --footer-p-color: #9faab6;
}

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        scroll-behavior: smooth;
    }
    a{
        text-decoration: none;
    }

`
export default GlobalStyles;