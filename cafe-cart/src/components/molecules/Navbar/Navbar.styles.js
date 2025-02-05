import styled from 'styled-components';
import { v } from '../../../styles/variables.js'
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
`;

export const NavbarLogoSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    height: 100%;
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
    font-weight: ${v.fontWeight.bolder};
    font-size: ${v.fontSize.medium};
`;

export const StyledLink = styled(Link).attrs(props => ({
    anchorTheme: props.anchorTheme
}))`
    text-decoration: none;
    color: ${(props) => props.anchorTheme.textColor1};
    &:hover{
        color: ${(props) => props.anchorTheme.backgroundColor2};
    }
    &:active{
        color: ${(props) => props.anchorTheme.backgroundColor3};
    }
`;

export default { 
    NavbarWrapper,
    NavbarLogoSpace,
    NavbarLogo,
    NavbarLinks,
    NavbarLink,
    StyledLink
};