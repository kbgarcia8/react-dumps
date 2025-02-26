import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { getScrollbarWidth } from '../../../utils/utils.js'
import * as styled from "./MainLayout.styles";

const MainLayout = ({header, sidebar, footer}) => {

    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        setScrollbarWidth(getScrollbarWidth());
        
    }, []);

    return (
        <styled.MainLayoutWrapper $scrollbarWidth={scrollbarWidth}>
            <styled.MainLayoutHeader>{header}</styled.MainLayoutHeader>
            <styled.MainLayoutContent>
                <Outlet />
            </styled.MainLayoutContent>
            <styled.MainLayoutFooter>{footer}</styled.MainLayoutFooter>
        </styled.MainLayoutWrapper>
    )
}

export default MainLayout;