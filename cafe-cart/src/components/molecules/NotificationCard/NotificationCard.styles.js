import styled from 'styled-components';
import GenericButton from '../../atoms/Button/Button';
import { v } from '../../../styles/variables';

export const NotificationImage = styled.img`
    width: 5%;
`;

export const NotifcationMessage = styled.span`
    display: flex;
    align-items: center;
    width: 70%;
    padding-left: ${v.spacing.medium};
    font-size: ${v.fontSize.xsmall};
    font-family: ${v.fonts.tertiary};
`;

export const NotificationCloseButton = styled(GenericButton)`
    background-color: transparent;
    width: 7.5%;
    height: 2.5vmin;
    color: black;
`;

export const NotificationCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.small};
    max-width: 100%;
    height: 20%;
    border: 2px solid red;
`;

export default {
    NotificationImage,
    NotifcationMessage,
    NotificationCloseButton,
    NotificationCardWrapper
};