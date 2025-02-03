import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Outlet } from 'react-router-dom';
import {MobileLayoutContainer, MobileHeader, MobileContent, MobileFooter} from "./MobileLayout.styles"

const MobileLayout = ({header, footer}) => {

    return (
        <>
            <MobileLayoutContainer>
                <MobileHeader>
                    {header}
                </MobileHeader>
                <MobileContent>
                    <Outlet />
                </MobileContent>
                <MobileFooter>
                    {footer}
                </MobileFooter>
            </MobileLayoutContainer>
        </>
    )
}

MobileLayout.propTypes = {
    header: PropTypes.node.isRequired,
    main: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired
}

export default MobileLayout;