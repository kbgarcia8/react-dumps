import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { notificationPalette, lightTheme } from "../../../styles/theme";
import { NotificationImage, NotifcationMessage, NotificationCloseButton, NotificationCardWrapper } from "./NotificationCard.styles";
import errorIcon from '../../../assets/error.png'
import warningIcon from '../../../assets/warning.png'
import successIcon from '../../../assets/success2.png'
import infoIcon from '../../../assets/info.svg'

const NotificationCard = ({
    notificationImage,
    notificationMessage,
    notificationType,
    hasCloseButton,
    closeButtonText,
    className
}) => {

    const { theme } = useTheme();

    let defaultImage;
    let backgroundColor;
    let textColor;

    switch (notificationType) {
        case 'error':
            defaultImage = errorIcon
            backgroundColor = theme == lightTheme ? notificationPalette.errorDark : notificationPalette.errorLight
            textColor = theme == lightTheme ? notificationPalette.errorLight : notificationPalette.errorDark
            break;
        case 'warning':
            defaultImage = warningIcon
            backgroundColor = theme == lightTheme ? notificationPalette.warningDark : notificationPalette.warningLight
            textColor = theme == lightTheme ? notificationPalette.warningLight : notificationPalette.warningDark
            break;
            case 'success':
                defaultImage = successIcon
                backgroundColor = theme == lightTheme ? notificationPalette.successDark : notificationPalette.successLight
                textColor = theme == lightTheme ? notificationPalette.successLight : notificationPalette.successDark
                break;
        default:
            defaultImage = infoIcon
            backgroundColor = theme == lightTheme ? notificationPalette.infoDark : notificationPalette.infoLight
            textColor = theme == lightTheme ? notificationPalette.infoLight : notificationPalette.infoDark
    }

    return (
        <NotificationCardWrapper className={className} borderColor={textColor} backgroundColor={backgroundColor}>
            <NotificationImage src={notificationImage ? notificationImage : defaultImage} alt={`${className}-image`} />
            <NotifcationMessage textColor={textColor}>{notificationMessage}</NotifcationMessage>
            {hasCloseButton && 
            <NotificationCloseButton 
                onClick={() => console.log('testing')}
                id={`${className}-close-button`}
                text={closeButtonText}
                textColor={textColor}
            />}
        </NotificationCardWrapper>
    );
}

NotificationCard.propTypes = {
    notificationImage: PropTypes.string,
    notificationMessage: PropTypes.string,
    notificationType: PropTypes.string.isRequired,
    hasCloseButton: PropTypes.bool,
    closeButtonText: PropTypes.string,
    className: PropTypes.string
}

export default NotificationCard;