import styled from "styled-components";

export const MobileLayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    height: 100vh;
    max-width: 100vw;
    gap: 0;
`;

export const MobileHeader = styled.div`
    max-width: 100vw;
    height: 7.5vh;
    position: relative;
    top: 0;
    grid-row: 1/2;
    border: 5px solid violet;
`;

export const MobileContent = styled.main`
    width: 100vw;
    height: calc(100vh - 15.005vh);
    overflow-y: scroll;
    grid-row: 2/3;
    border: 5px solid red;
`;

export const MobileFooter = styled(MobileHeader)`
    height: 7.5vh;
    position: relative;
    bottom: 0;
    grid-row: 3/4;
    border: 5px solid black;
`;

export default {MobileLayoutContainer, MobileHeader, MobileContent, MobileFooter};