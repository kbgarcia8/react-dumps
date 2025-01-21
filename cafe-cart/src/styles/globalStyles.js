import { createGlobalStyle } from 'styled-components';
import { v } from './variables';

//test screen-width: 1440
//test screen-height: 900

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@font-face {
    font-family: 'Oswald';
    url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
}

@font-face {
    font-family: 'Trirong';
    url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Trirong:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
}

@font-face {
    font-family: 'Arvo';
    url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Oswald:wght@200..700&family=Trirong:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
}

html, body {
    margin: 0;
    padding: 0;
    display: flex;
    place-items: center;
    font-size: ${v.base.fontSize};
}

h1, h2, h3, h4, form, legend {
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    line-height: ${v.base.lineHeight};
}

h1 {
    font-size: ${v.fontSize.xxlarge};
    margin-bottom: ${v.spacing.medium};
}
h2 {
    font-size: ${v.fontSize.xlarge};
    margin-bottom: ${v.spacing.small};
}
h3 {
    font-size: ${v.fontSize.large};
}
h4 {
    font-size: ${v.fontSize.medium};
}
h5 {
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.small};
}
p {
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.small};
    line-height: ${v.base.lineHeight};
}
ul,ol,p{
    margin-bottom: ${v.spacing.medium};
}

/* include a style for <a> or Link for link color and visited */

b, strong {
    font-weight: ${v.fontWeight.bold}
}
ul,ol{
    list-style-type: none;
}

ul li, ol li {
    line-height: ${v.base.lineHeight};
}
    
em {
    font-style: italic;
}

u {
    text-decoration: underline;
}


#root{
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
}

.component-tester {
    min-height: 100vh;
    width: 100vw;
    padding: ${v.spacing.small};
    /*background-color: #DDDDDD;*/
    background-color: transparent;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    place-items: center;
}

.toggle-button-container {
    width: 10%;
    border: 2px solid red;
    margin-bottom: ${v.spacing.medium}
}

.design-system-card {
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.screenColor};
    width: 50%;
    padding: ${v.spacing.medium};
}

.bolder-text {
    font-weight: ${v.fontWeight.bolder};
}

.button-entry, .icon-buttons {
    display: flex;
    flex-directon: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding-block: ${v.spacing.xxsmall};
}

.product-card-temporary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 25vmax;
    height: 30vmax;
    margin: 1rem;
    border: 2px solid black;
}

.stepper-temporary{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    height: 10%;
    border: 2px solid red;
}

.light-theme-card,
.dark-theme-card {
    display: flex;
    flex-direction: column;
    width: 45vw;
    height: 100%;
}
`;

export default GlobalStyle;