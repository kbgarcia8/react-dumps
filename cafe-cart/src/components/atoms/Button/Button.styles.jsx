import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    place-content: center;
    background-color: #202234;
    color: #FFFFFF;
    border-radius: 2rem;
    padding: 0.25rem 0.75rem;
    width: 100%;
    cursor: pointer;
    & .button-icon-and-text { //default styling for icon and text inside button
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        border: 2px solid red;
    }
`;

export default Button;