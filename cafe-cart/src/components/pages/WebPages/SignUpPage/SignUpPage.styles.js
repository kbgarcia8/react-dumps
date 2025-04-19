import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import { v } from '../../../../styles/variables';
import { Link } from "react-router-dom";
import { palette } from '../../../../styles/theme';

export const SignUpPageWrapper = styled.div`
    padding: ${v.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 100%;
    height: 95%;
`;

export const SignUpPageHeader =  styled.h3`
    width: 100%;
    text-align: center;
`;

export const SignUpForm = styled(GenericForm)`
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

    & .signup-inputs-label {
        display: flex;
        align-items: flex-start;
        font-size: ${v.fontSize.small};
    }

    & .signup-inputs {
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
        }
    }
`;

export const LoginMessageSpace = styled.div`
    width: 30%;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-bottom: ${v.spacing.medium};
    color: ${({theme}) => theme.textColor1};
`;
export const LoginMessage = styled.span`
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
`;
export const LoginLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.backgroundColor1};
    font-weight: bold;
    padding: ${v.spacing.xxxsmall};

    &:hover {
        color: ${({theme}) => theme.backgroundColor2};
        text-decoration: underline;
    }
`;
