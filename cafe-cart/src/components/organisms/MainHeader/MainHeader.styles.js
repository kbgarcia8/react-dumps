import styled from 'styled-components';
import { v } from '../../../styles/variables.js'
import GenericButton from '../../atoms/Button/index.js'

export const MainHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.screenColor};
    border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
`;

export const MainHeaderLogoSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    cursor: pointer;
    background-color: ${({theme}) => theme.screenColor};
`;

export const MainHeaderLogo = styled.img`
    width: 100%;
    height: 100%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    height: 100%;
    margin: 0;
`;

export const LoginButton = styled(GenericButton)`
    background-color: ${({theme}) => theme.backgroundColor1};
    color: ${({theme}) => theme.textColor3};
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor2};
    width: 45%;
    border-radius: ${v.spacing.xxsmall};

    &:hover{
        background-color: ${({theme}) => theme.backgroundColor2};
    }

    &:active {
        background-color: ${({theme}) => theme.backgroundColor1};
        color: ${({theme}) => theme.textColor3};
    }
`;

export const SignUpButton = styled(LoginButton)`
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