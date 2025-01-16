import styled from 'styled-components';
import GenericButton from '../../atoms/Button';

export const StepperButton = styled(GenericButton)`
    border-radius: 0.25rem;
    padding: 0;
    background-color: gray;
    color: white;
    width: 25%;
    height: 75%;
    & .button-icon-and-text span {
        font-size: 1rem;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0;
    }
`;

export const StepperCounter = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    border: 1px solid rgb(110, 110, 110);
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(110, 110, 110);
    height: 100%;
    width: 100%;
`;

export default { StepperButton, StepperCounter, StepperContainer };