import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { palette, lightTheme } from "../../../styles/theme";

import { StepperButton, StepperCounter, StepperContainer } from "./Stepper.styles";

const Stepper = ({ count, increment, decrement, className }) => {

    const { theme, toggleTheme } = useTheme();

    const themeSwitch = {
            color: theme == lightTheme ? palette.neutral4 : palette.neutral3,
            counterTextColor: theme == lightTheme ? palette.neutral5 : palette.neutral2,
            buttonTextColor: theme == lightTheme ? palette.neutral2 : palette.neutral5,
        }

    return (
        <StepperContainer color={themeSwitch.color} className={className}>
            <StepperButton color={themeSwitch.color} textColor={themeSwitch.buttonTextColor} onClick={decrement} text="-" />
            <StepperCounter color={themeSwitch.color} textColor={themeSwitch.counterTextColor}>{count}</StepperCounter>
            <StepperButton color={themeSwitch.color} textColor={themeSwitch.buttonTextColor} onClick={increment}  text="+"/>
        </StepperContainer>
    );
}

Stepper.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Stepper;