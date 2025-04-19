import styled from 'styled-components';
import GenericButton from '../../atoms/Button/index.js';

export const StepperButton = styled(GenericButton).attrs(props => ({
    color: props.color,
    textColor: props.textColor
}))`
    border-radius: 0;
    padding: 0;
    margin: 0;
    background-color: gray;
    color: white;
    width: 25%;
    height: 100%;
    background-color: ${(props) => props.$color};
    border: none;
    & .button-icon-and-text span {
        font-size: 1.5rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: ${(props) => props.$textColor};
    }
`;

export const StepperState = styled.span.attrs(props => ({
    color: props.color,
    textColor: props.textColor
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    border-inline: 2px solid  ${(props) => props.$color};
    color: ${(props) => props.$textColor};
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const StepperContainer = styled.div.attrs(props => ({
    color: props.color
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1.5px solid  ${(props) => props.$color};
    height: 5vh;
    width: 25%;
    border-radius: 0.25rem;
`;