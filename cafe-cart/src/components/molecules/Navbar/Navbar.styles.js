import styled from 'styled-components';
import { v } from '../../../styles/variables.js'
import GenericButton from '../../atoms/Button'
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const NavbarLogoSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    cursor: pointer;
`;

export const NavbarLogo = styled.img`
    width: 100%;
    height: 100%;
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 100%;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
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

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    height: 100%;
    margin: 0;
`;

export const NavbarButton1 = styled(GenericButton)`
    background-color: ${({theme}) => theme.backgroundColor1};
    color: ${({theme}) => theme.textColor3};
    border: 2px solid ${({theme}) => theme.borderColor2};
    width: 30%;
    border-radius: ${v.spacing.xxsmall};

    &:hover{
        background-color: ${({theme}) => theme.backgroundColor2};
    }

    &:active {
        background-color: ${({theme}) => theme.backgroundColor1};
        color: ${({theme}) => theme.textColor3};
    }
`;

export const NavbarButton2 = styled(NavbarButton1)`
    background-color: ${({theme}) => theme.backgroundColor3};
    color: ${({theme}) => theme.textColor1};
    border: 2px solid ${({theme}) => theme.textColor1};    

    &:hover {
        background-color: ${({theme}) => theme.backgroundColor4};
        color: ${({theme}) => theme.screenColor};
    }

    &:active {
        background-color: ${({theme}) => theme.backgroundColor3};
        color: ${({theme}) => theme.textColor1};
    }
`;

export const StyledLink = styled(Link).attrs(props => ({
    anchorTheme: props.anchorTheme
}))`
    text-decoration: none;
    color: ${(props) => props.$anchorTheme.textColor1};
    &:hover{
        color: ${(props) => props.$anchorTheme.backgroundColor2};
    }
    &:active{
        color: ${(props) => props.$anchorTheme.backgroundColor3};
    }
`;

export default { 
    NavbarWrapper,
    NavbarLogoSpace,
    NavbarLogo,
    NavbarLinks,
    NavbarLink,
    StyledLink,
    NavbarButton1,
    NavbarButton2
};