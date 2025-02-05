import styled from 'styled-components';
import { v } from '../../../styles/variables.js'

export const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color:rgb(168, 168, 168);
`;

export const NavbarLogoSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
    border: 2px solid red;
    cursor: pointer;
`;

export const NavbarLogo = styled.img`
    width: 100%;
    height: 100%;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 2px solid blue;
    width: 75%;
    height: 100%;
    margin: 0;
`;

export const NavbarLink = styled.li`
    display: flex;
    align-items: center;
    list-style-type: none;
    cursor: pointer;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-weight: ${v.fontWeight.medium}
`;

export default { 
    NavbarWrapper,
    NavbarLogoSpace,
    NavbarLogo,
    NavbarLinks,
    NavbarLink
};