import styled from 'styled-components';
import {v} from '../../../styles/variables'

export const DividerLine = styled.div.attrs(props => ({
    lineColor: props.lineColor
}))`
    width: 100%;
    height: 0.25vmax;    
    border: 1px solid ${(props) => props.$lineColor};
    background-color: ${(props) => props.$lineColor};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DividerText = styled.span.attrs(props => ({
    textColor: props.textColor,
    screenColor: props.screenColor
}))`
    font-size: ${v.fontSize.medium};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback}
    line-height: 1.25vmax;
    padding-inline: ${v.spacing.xsmall};
    color: ${(props) => props.$textColor};
    background-color: ${(props) => props.$screenColor};
    position: relative;
`;

export const DividerContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 2vmax;
`;

export default {DividerLine, DividerText, DividerContainer};