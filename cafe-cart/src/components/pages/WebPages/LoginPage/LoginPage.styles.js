import styled from 'styled-components';
import GenericForm from '../../../molecules/Form/index.js';
import { v } from '../../../../styles/variables.js';
import { Link } from "react-router-dom";
import { palette } from '../../../../styles/theme.js';

export const LoginPageWrapper = styled.div`
    padding: ${v.spacing.xxxsmall};
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
    padding-top: ${v.spacing.medium};
    padding-bottom: ${v.spacing.xlarge};
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

    & .login-inputs {
        color: ${palette.neutral5};
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
        margin-block: ${v.spacing.small};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 8%;

        & div[role="button"] {
            display: flex !important;
            align-items: center !important;
            background-color: ${({theme}) => theme.backgroundColor1} !important;
            color: ${({theme}) => theme.textColor3} !important;
            border-radius: ${v.borderRadius.medium} !important;
            border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1} !important;
            font-size: ${v.fontSize.xsmall} !important;
            font-family: ${v.fonts.primary}, ${v.fonts.fallback} !important;
            font-weight: ${v.fontWeight.bold} !important;
            width: 50% !important;
            height: 100% !important;
            padding: ${v.spacing.xxxsmall} !important;    
        }
        & div[role="button"]:hover {
            background-color: ${({theme}) => theme.backgroundColor2} !important;
            border: ${v.borderThickness.light} solid ${({theme}) => theme.textColor3} !important;
        }
        & div[role="button"] > div {
            width: 20% !important;
            height: 100% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: ${v.borderRadius.medium} !important;
            margin-block: ${v.spacing.xxxsmall} !important;
        }
        & div[role="button"] > span {
            width: 80%;
        }
    }
`;

export const SignUpMessageSpace = styled.div`
    width: 30%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-bottom: ${v.spacing.medium};
`;
export const SignUpMessage = styled.span`
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    color: ${({theme}) => theme.textColor1};
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
