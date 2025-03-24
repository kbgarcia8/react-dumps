import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const Input = styled.input`
    display: flex;
    place-content: center;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xsmall};
    line-height: 1.75;
    padding: ${v.spacing.xxxsmall} ${v.spacing.xsmall};
    max-width: 100%;
    background-color: #fff;
    outline: none;
    border: ${v.borderThickness.thin} solid #000000;
    border-radius: ${v.borderRadius.small};
`;

export default Input;