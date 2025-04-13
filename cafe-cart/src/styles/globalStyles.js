import { createGlobalStyle } from 'styled-components';
import { v } from './variables';
import oswald from "../fonts/Oswald-Regular.ttf";
import trirong from "../fonts/Trirong-Regular.ttf";
import arvo from "../fonts/Arvo-Regular.ttf";
import { notificationPalette } from './theme';

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
  font-weight: 400;
  src: url('${oswald}') format('truetype');
}

@font-face {
  font-family: 'Trirong';
  font-weight: 400;
  src: url('${trirong}') format('truetype');
}

@font-face {
  font-family: 'Arvo';
  font-weight: 400;
  src: url('${arvo}') format('truetype');
}

html, body {
    margin: 0;
    padding: 0;
    display: flex;
    place-items: center;
    font-size: calc(0.125vmin + ${v.base.fontSize});
    max-width: 100vw;
}

h1, h2, h3, h4, form, legend {
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    line-height: ${v.base.lineHeight};
    color: ${({theme}) => theme.textColor1};
}

p, label, input, button {
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    line-height: ${v.base.lineHeight};
    color: ${({theme}) => theme.textColor2};
}
h5, h6, legend {
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
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
    margin-bottom: ${v.spacing.xsmall};
}
h4 {
    font-size: ${v.fontSize.medium};
    margin-bottom: ${v.spacing.xsmall};
}
h5 {
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.small};
    margin-bottom: ${v.spacing.xsmall};
}
p {
    font-size: ${v.fontSize.small};
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
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
}

/* Styles for Design system */
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
    margin-bottom: ${v.spacing.medium};
    position: sticky;
    top: 0;
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

.button-entry, .icon-buttons, .input-styles {
    display: flex;
    flex-directon: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding-block: ${v.spacing.xxsmall};
}

.input-styles {
    flex-direction: column;
}

.div-grouped-radio-buttons,
.dropdown-space,
.divider-space,
.stepper-space,
.productcard-space,
.warn-and-info-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: ${v.spacing.small};
    border-radius: ${v.borderRadius.medium};
    padding: ${v.spacing.small};
    box-shadow: 0px 2px 3.84px ${({theme}) => theme.textColor1};
    min-height: 10vh;
}
.productcard-space {
    display: grid;
    grid-template-columns: repeat(auto-fit,
              minmax(10vmax, 1fr));
    gap: ${v.spacing.small};
    justify-content: center;
    align-items: center;
    width: 100%;
}

.stepper-space {
    display: flex;
    justify-content: center;
    align-items: center;
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

/* Style for toast-react */
    .Toastify__toast {
        border-radius: ${v.borderRadius.small};
        padding: ${v.spacing.small};
        font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    }
    
    ${({ theme }) => theme.name === 'lightTheme' && `
    .Toastify__toast--success {
      background-color: ${notificationPalette.successDark};
      color: ${notificationPalette.successLight};
    }
    .Toastify__toast--error {
      background-color: ${notificationPalette.errorDark};
      color: ${notificationPalette.errorLight};
    }
    .Toastify__toast--warning {
      background-color: ${notificationPalette.warningDark};
      color: ${notificationPalette.warningLight};
    }
    .Toastify__toast--info {
      background-color: ${notificationPalette.infoDark};
      color: ${notificationPalette.infoLight};
    }
  `}

  ${({ theme }) => theme.name === 'darkTheme' && `
    .Toastify__toast--success {
      background-color: ${notificationPalette.successLight};
      color: ${notificationPalette.successDark};
    }
    .Toastify__toast--error {
      background-color: ${notificationPalette.errorLight};
      color: ${notificationPalette.errorDark};
    }
    .Toastify__toast--warning {
      background-color: ${notificationPalette.warningLight};
      color: ${notificationPalette.warningDark};
    }
    .Toastify__toast--info {
      background-color: ${notificationPalette.infoLight};
      color: ${notificationPalette.infoDark};
    }
  `}
`;

export default GlobalStyle;