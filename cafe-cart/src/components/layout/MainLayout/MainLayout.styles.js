import styled from 'styled-components'
import { v } from '../../../styles/variables';

export const MainLayoutWrapper = styled.div.attrs(props => ({
    scrollbarWidth: props.scrollbarWidth
}))`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    width: ${(props) => `calc(100vw - ${props.scrollbarWidth}px)`};
    gap: 0;
`;

export const MainLayoutHeader = styled.div`
    max-width: 100%;
    height: 10vh;
    position: relative;
    top: 0;
    grid-row: 1/2;
    border: 1px solid red;
`;

export const MainLayoutContent = styled.main`
    max-width: 100%;
    min-height: 100vh;
    overflow-y: auto;
    grid-row: 2/3;
    border: 1px solid violet;
    padding: ${v.spacing.small};
`;

export const MainLayoutFooter = styled(MainLayoutHeader)`
    height: 7.5vh;
    position: relative;
    bottom: 0;
    grid-row: 3/4;
    border: 1px solid black;
`;

export default { MainLayoutWrapper, MainLayoutHeader, MainLayoutContent, MainLayoutFooter };