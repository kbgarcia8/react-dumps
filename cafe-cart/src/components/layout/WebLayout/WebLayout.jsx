import React from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { WebLayoutWrapper, WebLayoutHeader, WebLayoutSidebar, WebLayoutContent, WebLayoutFooter } from "./WebLayout.styles";

const WebLayout = ({header, sidebar, footer}) => {

    return (
        <WebLayoutWrapper>
            <WebLayoutHeader>{header}</WebLayoutHeader>
            <WebLayoutSidebar>{sidebar}</WebLayoutSidebar>
            <WebLayoutContent>
                <Outlet />
            </WebLayoutContent>
            <WebLayoutFooter>{footer}</WebLayoutFooter>
        </WebLayoutWrapper>
    )
}

export default WebLayout;