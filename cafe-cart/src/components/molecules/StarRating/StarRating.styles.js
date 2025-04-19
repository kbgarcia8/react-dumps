import styled from 'styled-components';
import { v } from '../../../styles/variables.js';

export const StarRatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export const StarIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;

    & svg{
        height: 100%;
        width: 7.5%;
    }
`
export const StarRatingText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    font-weight: ${v.fontWeight.bold};
    font-size: ${v.fontSize.xsmall};
`;