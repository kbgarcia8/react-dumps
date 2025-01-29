import styled from 'styled-components';

export const DividerLine = styled.div.attrs(props => ({
    lineColor: props.lineColor
}))`
    width: 100%;
    height: 0.25vmax;    
    border: 1px solid ${(props) => props.lineColor};
    background-color: ${(props) => props.lineColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DividerText = styled.span.attrs(props => ({
    textColor: props.textColor,
    screenColor: props.screenColor
}))`
    font-size: 1.25vmax;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.25vmax;
    padding: 0.5vmax;
    color: ${(props) => props.textColor};
    background-color: ${(props) => props.screenColor};
`;

export const DividerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2vmax;
`;

export default {DividerLine, DividerText, DividerContainer};