import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import { v } from '../../../../styles/variables';

export const LoginPageWrapper = styled.div`
    padding: ${v.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    max-width: 100%;
    height: 100%;
`;

export const LoginPageHeader =  styled.h4`
    width: 100%;
    text-align: center;
`;

export const LoginForm = styled(GenericForm)`
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.small};
    width: 30%;
    & fieldset {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    & .login-inputs-label {
        border: 2px solid red;
        display: flex;
        align-items: flex-start;
    }
    
    & .form-main-button-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid red;

        & button {
            width: 50%;
        }
    }
`;