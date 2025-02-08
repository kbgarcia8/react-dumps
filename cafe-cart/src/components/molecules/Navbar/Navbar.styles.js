import styled from 'styled-components';
import { v } from '../../../styles/variables.js'
import GenericButton from '../../atoms/Button'
import { Link } from 'react-router-dom';

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
    Navbar,
    NavbarLinks,
    NavbarLink,
    StyledLink,
};