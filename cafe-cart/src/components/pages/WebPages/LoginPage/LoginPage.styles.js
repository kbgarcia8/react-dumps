import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import { v } from '../../../../styles/variables';
import { Link } from "react-router-dom";

export const LoginPageWrapper = styled.div`
    padding: ${v.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 100%;
    height: 100%;
`;

export const LoginPageHeader =  styled.h3`
    width: 100%;
    text-align: center;
`;

export const LoginForm = styled(GenericForm)`
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.small};
    width: 30%;
    height: 70%;

    & fieldset {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border: none;
    }

    & .label-input-container {
        margin-block: ${v.spacing.medium};
    }

    & .login-inputs-label {
        display: flex;
        align-items: flex-start;
        font-size: ${v.fontSize.small};
    }
    
    & .form-main-button-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-block: ${v.spacing.xsmall};

        & button {
            width: 50%;
            border-radius: ${v.borderRadius.medium};
            margin-block: ${v.spacing.xxxsmall};
            & span{
                font-size: ${v.fontSize.xsmall};
                font-family: ${v.fonts.primary}, ${v.fonts.fallback};
                font-weight: ${v.fontWeight.bold};
            }            
        }
    }
    
    & .children-container {
        margin-block: ${v.spacing.xxxsmall};
        height: 10%;
        & div[role="button"] {
            display: flex !important;
            align-items: center !important;
            background-color: ${({theme}) => theme.backgroundColor1} !important;
            color: ${({theme}) => theme.textColor3} !important;
            border-radius: ${v.borderRadius.medium} !important;
            font-size: ${v.fontSize.xsmall} !important;
            font-family: ${v.fonts.primary}, ${v.fonts.fallback} !important;
            font-weight: ${v.fontWeight.bold} !important;
            width: 50% !important;
            height: 100% !important;
        }
        & div[role="button"]:hover {
            background-color: ${({theme}) => theme.backgroundColor2} !important;
            border: ${v.borderThickness.light} solid ${({theme}) => theme.textColor3} !important;
        }
        & div[role="button"] > div {
            border: 2px solid green !important;
            width: 20% !important;
            height: 95% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: ${v.borderRadius.medium} !important;
        }
        & div[role="button"] > span {
            width: 80%;
        }
    }
`;

export const SignUpMessageSpace = styled.div`
    border: 2px solid black;
    width: 30%;
    align-items: center;
    justify-content: center;
    display: flex;
`;
export const SignUpMessage = styled.span`
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
`;
export const SignUpLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.backgroundColor1};
    font-weight: bold;
    padding: ${v.spacing.xxxsmall};

    &:hover {
        color: ${({theme}) => theme.backgroundColor2};
        text-decoration: underline;
    }
`;
