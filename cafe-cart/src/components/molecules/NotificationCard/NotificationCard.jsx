import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { palette, lightTheme } from "../../../styles/theme";
import { NotificationImage, NotifcationMessage, NotificationCloseButton, NotificationCardWrapper } from "./ProductCard.styles";

const NotificationCard = ({
    notificationImage,
    notificationMessage,
    NotificationCloseButton,
    className
}) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <NotificationCardWrapper className={className}>

        </NotificationCardWrapper>
    );
}

NotificationCard.propTypes = {
    
}

export default NotificationCard;