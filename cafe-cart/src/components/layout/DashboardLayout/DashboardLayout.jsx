import React from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import * as styled from "./DashboardLayout.styles";

const DashboardLayout = ({header, sidebar}) => {

    return (
        <styled.DashboardLayoutWrapper>
            <styled.DashboardLayoutHeader>{header}</styled.DashboardLayoutHeader>
            <styled.DashboardLayoutSidebar>{sidebar}</styled.DashboardLayoutSidebar>
            <styled.DashboardLayoutContent>
                <Outlet />
            </styled.DashboardLayoutContent>
        </styled.DashboardLayoutWrapper>
    )
}

DashboardLayout.propTypes = {
    header: PropTypes.element,
    sidebar: PropTypes.element
}

export default DashboardLayout;