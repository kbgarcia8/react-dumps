import styled from 'styled-components';
import { v } from '../../../styles/variables.js'

export const DashboardHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: ${v.spacing.xxsmall};
    background-color: ${({theme}) => theme.backgroundColor3};
`;

export const DashboardWelcomeMessage = styled.h4`
    display: flex;
    align-items: center;
    width: 75%;
    height: 100%;
    margin: 0;
    color: ${({theme}) => theme.textColor1};
    margin-left: ${v.spacing.medium};
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
`;