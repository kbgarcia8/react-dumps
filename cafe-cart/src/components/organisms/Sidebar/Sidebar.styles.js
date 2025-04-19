import styled from 'styled-components';
import { v } from '../../../styles/variables.js';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-right: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor};
`;

export const SidebarLogoSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 9.5%;
    cursor: pointer;
`;

export const SidebarLogo = styled.img`
    width: 75%;
    height: 100%;
`;

export const SidebarMainControlsSpace = styled.div`
    height: 45%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
export const StyledLinkWithImage = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: fit-content;
    color: ${({theme}) => theme.backgroundColor1};
    
    &:hover{
        color: ${({theme}) => theme.backgroundColor3};
    }

    & svg {
        width: 100%;
    }
`;

export const SidebarSettingsSpace = styled(SidebarMainControlsSpace)`
    height: 20%;
`