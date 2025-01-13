import styled from "styled-components";

export const MobileLayoutContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    overflow: hidden;
`;

export const MobileHeader = styled.div`
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 0;
    grid-row: 1/2;
`;

export const MobileContent = styled.main`
    width: 100vw;
    height: calc(100% - 5vh - 5vh);
    overflow-y: auto;
    grid-row: 2/3;
`;

export const MobileFooter = styled(MobileHeader)`
    top: 100%;
    bottom: 0;
    grid-row: 3/4;
`;

export default {MobileLayoutContainer, MobileHeader, MobileContent, MobileFooter};