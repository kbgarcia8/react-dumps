import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import { v } from '../../../../styles/variables';

export const SignUpPageWrapper = styled.div`
    padding: ${v.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 100%;
    height: 100%;
    border: 2px solid red;
`;

export const SignUpPageHeader =  styled.h3`
    width: 100%;
    text-align: center;
`;

export const SignUpForm = styled(GenericForm)`
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.small};
    width: 30%;
    height: 75%;

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
    }
    
    & .form-main-button-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-block: ${v.spacing.small};

        & button {
            width: 50%;
            border-radius: ${v.borderRadius.medium};
        }
    }
`;