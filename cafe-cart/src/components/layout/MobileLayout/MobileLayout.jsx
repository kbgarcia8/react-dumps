import React, { useContext } from "react"
import PropTypes from "prop-types"
import {MobileLayoutContainer, MobileHeader, MobileContent, MobileFooter} from "./MobileLayout.styles"

const MobileLayout = ({header, main, footer}) => {

    return (
        <>
            <MobileLayoutContainer>
                <MobileHeader>
                    {header}
                </MobileHeader>
                <MobileContent>
                    {main}
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