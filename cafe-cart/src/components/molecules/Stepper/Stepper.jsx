import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeProvider";
import { palette, lightTheme } from "../../../styles/theme";
import * as styled from "./Stepper.styles";

const Stepper = ({ stepperState, increment, incrementButtonText, decrementButtonText, decrement, dataAttributes, className }) => {

    const { theme } = useTheme();

    const themeSwitch = {
            color: theme == lightTheme ? palette.neutral4 : palette.neutral3,
            counterTextColor: theme == lightTheme ? palette.neutral5 : palette.neutral2,
            buttonTextColor: theme == lightTheme ? palette.neutral2 : palette.neutral5,
        }

    return (
        <styled.StepperContainer $color={themeSwitch.color} className={className}>
            <styled.StepperButton $color={themeSwitch.color} $textColor={themeSwitch.buttonTextColor} onClick={decrement} text={decrementButtonText} dataAttributes={dataAttributes}/>
            <styled.StepperState $color={themeSwitch.color} $textColor={themeSwitch.counterTextColor} className={"stepper-state"}>{stepperState}</styled.StepperState>
            <styled.StepperButton $color={themeSwitch.color} $textColor={themeSwitch.buttonTextColor} onClick={increment}  text={incrementButtonText} dataAttributes={dataAttributes}/>
        </styled.StepperContainer>
    );
}

Stepper.propTypes = {
    stepperState: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    increment: PropTypes.func.isRequired,
    incrementButtonText: PropTypes.string.isRequired,
    decrement: PropTypes.func.isRequired,
    decrementButtonText: PropTypes.string.isRequired
}

export default Stepper;