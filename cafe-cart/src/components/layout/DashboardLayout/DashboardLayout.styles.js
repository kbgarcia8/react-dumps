import styled from 'styled-components'
import { v } from '../../../styles/variables';

export const DashboardLayoutWrapper = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: repeat(2, minmax(5vw, auto));
    min-height: 100vh;
    max-width: 100vw
    gap: 0;
`;

export const DashboardLayoutHeader = styled.div`
    max-width: 100vw;
    height: 10vh;
    position: relative;
    top: 0;
    grid-row: 1/2;
    border: 1px solid red;
`;

export const DashboardLayoutSidebar = styled.div`
    width: 5vw;
    height: 100vh;
    position: relative;
    top: 0;
    grid-column: 1/2;
    grid-row: 1/4;
    border: 1px solid blue;
`;

export const DashboardLayoutContent = styled.main`
    width: 100vw;
    min-height: 100vh;
    overflow-y: scroll;
    grid-row: 2/3;
    border: 1px solid violet;
    padding: ${v.spacing.small};
`;

export const DashboardLayoutFooter = styled(DashboardLayoutHeader)`
    height: 7.5vh;
    position: relative;
    bottom: 0;
    grid-row: 3/4;
    border: 1px solid black;
`;

export default { DashboardLayoutWrapper, DashboardLayoutHeader, DashboardLayoutSidebar, DashboardLayoutContent, DashboardLayoutFooter };