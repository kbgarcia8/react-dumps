import styled from 'styled-components';
import { v } from '../../../styles/variables.js'

export const DashboardHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: ${v.spacing.xxsmall};
`;

export const DashboardWelcomeMessage = styled.h4`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    margin: 0;
`;