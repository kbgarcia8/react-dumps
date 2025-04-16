import styled from 'styled-components';
import { v } from '../../../styles/variables.js'

export const FooterWrapper = styled.div.attrs(props => ({
    $footerBackgroundColor: props.$footerBackgroundColor,
    $cardShadowColor: props.$cardShadowColor
}))`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-shadow: 0 -${v.spacing.xxxsmall} ${v.spacing.small} 0 ${(props) => props.$cardShadowColor};    
    background-color: ${(props) => props.$footerBackgroundColor};
    padding: ${v.spacing.medium};
`;
export const FooterMessage = styled.span.attrs(props => ({
    $footerTextColor: props.$footerTextColor
}))`
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    width 100%;
    text-align: center;
    color: ${(props) => props.$footerTextColor};
`;