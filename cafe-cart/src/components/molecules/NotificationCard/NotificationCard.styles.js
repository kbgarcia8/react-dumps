import styled from 'styled-components';
import GenericButton from '../../atoms/Button/index.js';
import { v } from '../../../styles/variables.js';

export const NotificationImage = styled.img`
    width: 5%;
`;

export const NotifcationMessage = styled.span.attrs(props => ({
    textColor: props.textColor
}))`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: ${v.spacing.medium};
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.tertiary};
    color: ${(props) => props.$textColor};
`;

export const NotificationCloseButton = styled(GenericButton).attrs(props => ({
    textColor: props.textColor,

}))`
    background-color: transparent;
    border: none;
    width: 7.5%;
    height: 2.5vmin;
    color: ${(props) => props.$textColor};
    && .button-icon-and-text span { //default styling for text inside button
        font-size: ${v.fontSize.xsmall};
        font-weight: ${v.fontWeight.bolder};        
    }
`;

export const NotificationCardWrapper = styled.div.attrs(props => ({
    borderColor: props.borderColor,
    backgroundColor: props.backgroundColor
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.medium};
    margin: ${v.spacing.xxsmall};
    max-width: 100%;
    height: 20%;
    background-color: ${(props) => props.$backgroundColor};
    border-radius: ${v.borderRadius.small};
    border: 2px solid ${(props) => props.$borderColor};
`;

export default {
    NotificationImage,
    NotifcationMessage,
    NotificationCloseButton,
    NotificationCardWrapper
};