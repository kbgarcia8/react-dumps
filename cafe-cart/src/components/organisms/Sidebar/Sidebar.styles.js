import styled from 'styled-components';
import { v } from '../../../styles/variables.js'
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const SidebarLogoSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 8.5%;
    cursor: pointer;
`;

export const SidebarLogo = styled.img`
    width: 75%;
    height: 100%;
`;

export const SidebarMainControlsSpace = styled(SidebarWrapper)`
    height: 75%;
    width: 100%;
    isplay: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const StyledLinkWithImage = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 7.5%;
    border: 2px solid red;
`;

export const SidebarSettingsSpace = styled(SidebarMainControlsSpace)`
    height: 15%;
`

export default { 
    SidebarWrapper,
    SidebarLogoSpace,
    SidebarLogo,
    SidebarMainControlsSpace,
    StyledLinkWithImage,
    SidebarSettingsSpace
};