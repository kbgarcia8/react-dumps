import { React, useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { getScrollbarWidth } from '../../../utils/utils.js'
import * as styled from "./MainLayout.styles.js";

const MainLayout = ({header, footer}) => {

    const [scrollbarWidth, setScrollbarWidth] = useState(0);

    useEffect(() => {
        setScrollbarWidth(getScrollbarWidth());        
    }, []);

    return (
        <styled.MainLayoutWrapper $scrollbarWidth={scrollbarWidth}>
            <styled.MainLayoutHeader>{header}</styled.MainLayoutHeader>
            <styled.MainLayoutContent>
                <Outlet context={{
                    
                }}/>
            </styled.MainLayoutContent>
            <styled.MainLayoutFooter>{footer}</styled.MainLayoutFooter>
        </styled.MainLayoutWrapper>
    )
}

export default MainLayout;