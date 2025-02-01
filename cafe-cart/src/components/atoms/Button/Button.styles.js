import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: #202234;
    color: #FFFFFF;
    border-radius: 2rem;
    padding: 0.25rem 0.75rem;
    margin: 0.125rem;
    width: 50%;
    cursor: pointer;
    & .button-icon-and-text { //default styling for icon and text inside button
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    & .button-icon-and-text img { //default styling for icon inside button
        width: 100%;
    }
    & .button-icon-and-text span { //default styling for text inside button
        font-size: 0.75rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Button;