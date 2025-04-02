import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import { v } from '../../../../styles/variables';

export const LoginPageWrapper = styled.div`
    padding: ${v.spacing.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    height: 100%;
`;

export const LoginPageHeader =  styled.h4`
    width: 100%;
    text-align: center;
`;

export const LoginForm = styled(GenericForm)``;