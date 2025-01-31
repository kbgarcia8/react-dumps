import styled from 'styled-components';
import GenericButton from '../../atoms/Button/Button';
import { v } from '../../../styles/variables';

export const NotificationImage = styled.img``;

export const NotifcationMessage = styled.span``;

export const NotificationCloseButton = styled(GenericButton)`

`;

export const NotificationCardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
`;

export default {
    NotificationImage,
    NotifcationMessage,
    NotificationCloseButton,
    NotificationCardWrapper
};