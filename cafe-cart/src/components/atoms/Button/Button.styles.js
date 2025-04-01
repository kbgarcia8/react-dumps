import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: ${({theme}) => theme.backgroundColor1};
    color: ${({theme}) => theme.textColor3};
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor2};
    border-radius: ${v.borderRadius.xlarge};
    padding: ${v.spacing.xxxsmall} ${v.spacing.small};
    margin: 0.125rem;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.backgroundColor2};
        border: ${v.borderThickness.light} solid ${({theme}) => theme.textColor3};
    }

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
    & .button-icon-and-text svg {
        width: 100%;
    }
    & .button-icon-and-text span {
        font-size: ${v.fontSize.xsmall};
        font-weight: ${v.fontWeight.medium};
        font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Button;