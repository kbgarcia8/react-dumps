import styled from 'styled-components';

export const DividerLine = styled.div`
    width: 100%;
    height: 0.05vmax;    
    border: 1px solid rgb(0, 0, 0);
    background-color: rgb(0, 0, 0);
`;

export const DividerText = styled.span`
    font-size: 1.25vmax;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.25vmax;
    padding: 1vmax;
`;

export const DividerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default {DividerLine, DividerText, DividerContainer};