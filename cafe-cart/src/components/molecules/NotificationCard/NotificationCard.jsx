import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { palette, lightTheme } from "../../../styles/theme";
import { NotificationImage, NotifcationMessage, NotificationCloseButton, NotificationCardWrapper } from "./NotificationCard.styles";

const NotificationCard = ({
    notificationImage,
    notificationMessage,
    hasCloseButton,
    closeButtonText,
    className
}) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <NotificationCardWrapper className={className}>
            <NotificationImage src={notificationImage} alt={`${className}-image`} />
            <NotifcationMessage>{notificationMessage}</NotifcationMessage>
            {hasCloseButton && 
            <NotificationCloseButton 
                onClick={() => console.log('testing')}
                id={`${className}-close-button`}
                text={closeButtonText}
            />}
        </NotificationCardWrapper>
    );
}

NotificationCard.propTypes = {
    notificationImage: PropTypes.string,
    notificationMessage: PropTypes.string,
    hasCloseButton: PropTypes.boolean,
    closeButtonText: PropTypes.string,
    className: PropTypes.string
}

export default NotificationCard;