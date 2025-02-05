import React from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { DashboardLayoutWrapper, DashboardLayoutHeader, DashboardLayoutSidebar, DashboardLayoutContent, DashboardLayoutFooter } from "./DashboardLayout.styles";

const DashboardLayout = ({header, sidebar, footer}) => {

    return (
        <DashboardLayoutWrapper>
            <DashboardLayoutHeader>{header}</DashboardLayoutHeader>
            <DashboardLayoutSidebar>{sidebar}</DashboardLayoutSidebar>
            <DashboardLayoutContent>
                <Outlet />
            </DashboardLayoutContent>
            <DashboardLayoutFooter>{footer}</DashboardLayoutFooter>
        </DashboardLayoutWrapper>
    )
}

export default DashboardLayout;