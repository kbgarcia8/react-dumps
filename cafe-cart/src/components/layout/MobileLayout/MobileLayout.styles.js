import styled from "styled-components";

export const MobileLayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    height: 100vh;
    border: 2px solid blue;
    gap: 0;
`;

export const MobileHeader = styled.div`
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 0;
    grid-row: 1/2;
    border: 2px solid red;
`;

export const MobileContent = styled.main`
    width: 100vw;
    height: calc(100% - 5vh - 5vh);
    overflow-y: auto;
    grid-row: 2/3;
    border: 2px solid red;
`;

export const MobileFooter = styled(MobileHeader)`
    position: absolute;
    top: 100%;
    grid-row: 3/4;
    border: 2px solid red;
`;

export default {MobileLayoutContainer, MobileHeader, MobileContent, MobileFooter};