import React from "react";
import PropTypes from "prop-types";
import { StepperButton, StepperCounter, StepperContainer } from "./Stepper.styles";

const Stepper = ({ count, increment, decrement, className }) => {
    return (
        <StepperContainer className={className}>
            <StepperButton onClick={decrement} text="-" />
            <StepperCounter>{count}</StepperCounter>
            <StepperButton onClick={increment}  text="+"/>
        </StepperContainer>
    );
}

Stepper.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Stepper;