import styled from 'styled-components'
import { v } from '../../../styles/variables';

export const DashboardLayoutWrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 5vw 1fr;
    min-height: 100vh;
    width: 100vw;
    gap: 0;
`;

export const DashboardLayoutHeader = styled.div`
    max-width: 100%;
    height: 10vh;
    position: relative;
    top: 0;
    grid-area: 1/2/2/3;
    border: 1px solid red;
`;

export const DashboardLayoutSidebar = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    grid-area: 1/1/3/2;
    border: 1px solid blue;
`;

export const DashboardLayoutContent = styled.main`
    width: 100%;
    min-height: 100%;
    overflow-y: auto;
    grid-area: 2/2/3/3;
    border: 1px solid violet;
`;

export default { DashboardLayoutWrapper, DashboardLayoutHeader, DashboardLayoutSidebar, DashboardLayoutContent };