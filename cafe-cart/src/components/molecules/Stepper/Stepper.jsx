import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { palette, lightTheme } from "../../../styles/theme";

import * as styled from "./Stepper.styles";

const Stepper = ({ count, increment, decrement, dataIndex, dataQuantity, className }) => {

    const { theme, toggleTheme } = useTheme();

    const themeSwitch = {
            color: theme == lightTheme ? palette.neutral4 : palette.neutral3,
            counterTextColor: theme == lightTheme ? palette.neutral5 : palette.neutral2,
            buttonTextColor: theme == lightTheme ? palette.neutral2 : palette.neutral5,
        }

    return (
        <styled.StepperContainer $color={themeSwitch.color} className={className}>
            <styled.StepperButton $color={themeSwitch.color} $textColor={themeSwitch.buttonTextColor} onClick={decrement} text="-" dataAttributes={{"data-index": dataIndex, "data-quantity": dataQuantity}}/>
            <styled.StepperCounter $color={themeSwitch.color} $textColor={themeSwitch.counterTextColor}>{count}</styled.StepperCounter>
            <styled.StepperButton $color={themeSwitch.color} $textColor={themeSwitch.buttonTextColor} onClick={increment}  text="+" dataAttributes={{"data-index": dataIndex, "data-quantity": dataQuantity}}/>
        </styled.StepperContainer>
    );
}

Stepper.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Stepper;